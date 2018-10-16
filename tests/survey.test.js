const signIn = require('./signin.test');
const data = require('../data');
const { user2 } = data;

describe('Survey actions', () => {
  const surveyDebate = 'http://localhost:6543/testfred';
  beforeEach(async () => {
    jest.setTimeout(100000);
    await signIn(surveyDebate, user2.email, user2.password);
    await page.goto(`${surveyDebate}/debate/survey/theme/VGhlbWF0aWM6Mjg2MA==`);
  });
  const randomId = Math.random() * 10000;
  test('I can answer to the first question of a thematic', async () => {
    const firstQuestionInput = '.questions-section .public-DraftEditor-content';
    const answerText = `Les risques qui ont plus de 18 ans. #${randomId}`;
    const submitButton = '.button-submit';
    const answerBody = '.post-body-content > div > div > p';
    await page.waitForSelector('.dark-title-5');
    await page.waitForSelector(firstQuestionInput);
    await page.click(firstQuestionInput);
    await page.type(firstQuestionInput, answerText);
    await page.waitFor(submitButton);
    await page.click(submitButton);
    await page.waitForSelector('.showAlert');
    await page.waitFor(1500); // replace by a better waiter
    await expect(page).toMatch(answerText);
  });
});
