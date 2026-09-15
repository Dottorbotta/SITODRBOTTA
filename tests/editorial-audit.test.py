import importlib.util
import unittest
spec=importlib.util.spec_from_file_location('editorial','scripts/editorial-audit.py'); m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
class AuditTests(unittest.TestCase):
    def fixture(self):
        return ([{'path':'/','html':'<title>Home</title><meta content="Home description" name="description"><a href="/blog/example">Read</a><img alt="" src="decoration.svg">'}, {'path':'/blog/example','html':'<title>Example</title><meta name="description" content="Article description">'}], [{'slug':'example','imageAlt':'','relatedPosts':[],'clinicalReview':{'status':'not-recorded','reviewer':None,'date':None}}])
    def test_decorative_empty_alt_and_unreviewed_are_valid(self):
        p,r=self.fixture();self.assertEqual(m.audit(p,r)[0],[])
    def test_missing_alt_is_not_decorative(self):
        p,r=self.fixture();p[0]['html']=p[0]['html'].replace('alt=""','');r[0].pop('imageAlt')
        self.assertEqual({f['rule'] for f in m.audit(p,r)[0]},{'missing-alt','undocumented-cover-alt'})
    def test_broken_related_and_unsupported_review_fail(self):
        p,r=self.fixture();r[0].update(relatedPosts=['missing'],clinicalReview={'status':'reviewed','date':'2026-02-30'})
        self.assertEqual({f['rule'] for f in m.audit(p,r)[0]},{'missing-related','clinical-review-date','clinical-review-author'})
    def test_self_and_external_links_do_not_resolve_orphan(self):
        p,r=self.fixture();p[0]['html']=p[0]['html'].replace('href="/blog/example"','href="https://other.test/blog/example"');p[1]['html']+='<a href="/blog/example">Self</a>'
        self.assertIn('orphan-article',{f['rule'] for f in m.audit(p,r)[0]})
    def test_missing_and_duplicate_metadata(self):
        p,r=self.fixture();p[1]['html']='<title>Home</title>'
        rules={f['rule'] for f in m.audit(p,r)[0]};self.assertIn('duplicate-metadata',rules);self.assertIn('metadata',rules)
if __name__=='__main__': unittest.main()
