const data = require('../../data');
const signIn = require('../../helpers').signin;

describe('Thread actions', () => {
  let page;
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    jest.setTimeout(100000);
    await signIn();
    await page.goto(
      `${data.url}/e2e-tests-thread/debate/thread/theme/SWRlYTo0MDAw`
    );
  });
  const randomId = Math.random() * 10000;
  test('I can create a new top post on a thread', async () => {
    const titleInput = 'input[name=top-post-title]';
    const bodyInput = '.top-post-form .public-DraftEditor-content';
    const submitButton = '.top-post-form .button-submit';
    const randomMessage = `Maëstro Kimpembé #${randomId}`;
    await page.waitForSelector(titleInput);
    await page.click(titleInput);
    await page.type(titleInput, 'Allez les bleus');
    await page.click(bodyInput);
    await page.type(bodyInput, randomMessage);
    await page.click(submitButton);
    await page.waitFor(3000);
    await expect(page).toMatch(randomMessage);
  });
  test('I can answer to a top post', async () => {
    const answerInput = '.answer-form-inner .public-DraftEditor-content';
    const submitButton = '.answer-form .button-submit';
    const answerText = `Kimpembé Kimpembé KimpembééééEEEééé #${randomId}`;
    await page.waitForSelector(answerInput);
    await page.click(answerInput);
    await page.type(answerInput, answerText);
    await page.waitFor(submitButton);
    await page.click(submitButton);
    await expect(page).toMatch(answerText);
  });
});
