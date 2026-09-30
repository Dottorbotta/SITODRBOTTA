# Atlante del movimento — approved visual system

- Ink / dark surfaces: #172C3B.
- Brand blue: #354961.
- Mint / accents on dark surfaces: #B6E5C2, paired with dark text.
- Ice / main surfaces: #EFF5F7.
- Soft panels: #DCE8EB. Borders: #C2D2D8.
- Green / actions and accents on light surfaces: #287044.
- Muted text: #526675.
- Original logo retains blue/green; do not redraw or recolor.
- Manrope, local fonts: body 400/500, interface 600/700, headings 800.
- Body at least 16 px, regular navigation at least 14 px, fluid headings.
- Precise grid, restrained 0–2 px corners, numbered process, strong light/dark rhythm.
- Original photographs, natural skin tones, no generated founder portraits.
- Reduced-motion preference respected. Visible keyboard focus and responsive menu.

Implementation: app/globals.css and app/restyling.css were migrated to cool tokens; app/atlante.css consolidates visual rules across the site. Preserve existing routes, article content, booking destinations, disclosures and audience.

Asset limitation: header/footer display the exact supplied logo via a CSS window on the supplied photo, preserving its original background. Replace with a supplied isolated logo when available, never approximate it.

## Editorial refinement — 25 September 2026

Content width capped at 1280px through shared gutters. Section rhythm 64–112px. Headings use 700 for editorial sections, 800 for the opening statement. Body remains 16–17px. Mint anchors actions and small accents; navy and ice carry the page. Portrait captions sit below images, preserving the face and original logo. Method hero shows the five actual capacity families instead of a decorative monogram. Reviews link directly to their source without a decorative five-star rating in the hero. No credentials, scores or outcome claims have been added. All interactive states, mobile grids and article templates share the same hierarchy.

## Brand Manual Atlante v1 alignment — 26 September 2026
For commercial pages, the uploaded manual supersedes earlier header/photo-logo and heading rules. Use the actual horizontal lockup extracted from page 5, at public/brand/corpo-capace-atlante-horizontal.png. This raster is an approved-concept asset, not a finished vector master. Keep white as the main surface, ice panels, navy editorial sections, green CTA on light backgrounds and mint CTA on navy. Manrope headings 700, subheads 600, body 400; commercial body 17–19 px. Styles scoped under .cc-page in app/corpo-capace.css; article templates and content unchanged. Shared header/footer use the supplied logo and the internal /colloquio route.

## Quiz Corpo Capace — 26 September 2026
Preserve Atlante. Use a navy top bar with five-step progress, white question surface, ice option cards with native radio controls and green selection accents. Keep one question per step, minimum 44px targets, visible back/reset actions and a descriptive result before the consultation CTA. Demand categories and functional profiles are separate; labels always relate to the selected activity. Guides use an honest empty state until approved materials are provided.

## Homepage evolution — 28 September 2026
User requests the photographic, immediately clear homepage rhythm of corposostenibile.com. Observed reference: three photographs crossfade with slow zoom, fixed centered headline/CTA, roomy split introduction, dark services section, staggered onboarding steps, testimonials. Adaptation keeps Atlante navy #172c3b, green #287044, mint #b6e5c2, ice #eff5f7 and Manrope; uses existing project lifestyle photographs, no competitor assets or claims. Typography 500–600 on homepage headings, rounded photographic frame and pill CTA with circular arrow. 21-second decorative image loop starts on load, has pause/resume and honors reduced motion; text never waits for animation. First screen names Corpo Capace, describes online personalized exercise for persistent pain and the delivery team. Founder is credited later. Quiz remains /quiz-corpo-capace, reached through Guide/footer, with no embedded quiz or quiz promotion in homepage body. Existing disclaimers removal is preserved. No new outcomes, credentials, ratings or team photographs invented. Homepage-only style scope preserves internal pages and blog.

## Internal page system — 28 September 2026
User-approved reference: supplied Corposostenibile contact-page screenshot; inspected /contatti, /chi-siamo and /il-metodo. Preserve approved homepage and exclude all blog routes. Internal pages open with a contextual full-width photograph in a gently rounded frame, navy overlay, short page-name H1 and Home breadcrumb. Retain original copy as an editorial H2 and introduction below the cover. Shared implementation: PageHero.tsx, Marketing.tsx and inner-pages.css, scoped to .cc-inner-site. Photo sources are existing project assets; illustrative photos must never be labelled as actual team members or testimonial subjects. Founder uses his supplied portrait with a protected crop. Intro split, numbered processes, editorial testimonial rows, FAQ side headings and generous section spacing adapt to content. Quiz cover is shorter to keep the activity close. Legal content remains intact.

Authoritative reference retained at docs/brand/Corpo_Capace_Brand_Manual_Atlante_v1.pdf (v1.0, 25 September 2026). Exact core palette: navy #172C3B, green #287044, mint #B6E5C2, ice #EFF5F7, white #FFFFFF. Manrope 700 titles, 600 subheads, 400 body; 8px spacing grid. No logo redraw, invented proof, or new brand variants.

## Contact page — 28 September 2026
/contatti follows the supplied contact screenshot: photographic opening, two-column contact details and labelled form, social links, navy closing booking section. Uses team email teamdrbotta@gmail.com and existing social profiles. No verified WhatsApp number or 24-hour service promise is available. Form is an explicit email-composition handoff (mailto), with native validation, optional phone, privacy acknowledgement and truthful status; it does not submit or store inquiries on the server. Replace with direct delivery only after an authorized delivery service is configured. Navigation, footer and editorial route registry include the new page.
