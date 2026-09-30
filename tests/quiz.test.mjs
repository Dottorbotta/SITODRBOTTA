import test from 'node:test';
import assert from 'node:assert/strict';
import {getQuizResult,emptyQuiz,quizGoals} from '../app/lib/quiz.ts';
const complete={goal:'salute',movement:'yes',duration:'yes',recovery:'yes',participation:'ready'};
test('quiz never assigns a result before all five answers',()=>{assert.equal(getQuizResult(emptyQuiz),null);for(const key of Object.keys(complete))assert.equal(getQuizResult({...complete,[key]:null}),null);});
test('four matrix profiles retain the two independent dimensions for every demand category',()=>{for(const goal of quizGoals){for(const [movement,duration,expected] of [['yes','yes','capace'],['no','yes','limitato'],['yes','no','fragile'],['no','no','incapace']]){const result=getQuizResult({...complete,goal:goal.id,movement,duration});assert.equal(result.key,expected);assert.equal(result.goal.id,goal.id);}}});
test('repeatability affects tolerance; uncertainty is never converted to a healthy or impaired score',()=>{assert.equal(getQuizResult({...complete,recovery:'no'}).key,'fragile');assert.equal(getQuizResult({...complete,movement:'unknown'}).key,'daChiarire');assert.equal(getQuizResult({...complete,recovery:'unknown'}).key,'daChiarire');assert.equal(getQuizResult({...complete,duration:'no',recovery:'unknown'}).key,'fragile');});
test('readiness and request level do not manufacture clinical severity',()=>{for(const participation of ['ready','help','unsure'])assert.equal(getQuizResult({...complete,participation}).key,'capace');});
