const data = require('../data');
const signIn = require('../helpers').signin;

describe('Create a post on a thread', () => {
  beforeAll(async () => {
    jest.setTimeout(100000);
    await signIn();
    await page.goto(`${data.url}/debate/thread/theme/SWRlYTozMjA1`);
  });
  const randomId = Math.random() * 10000;
  test('I can create a new top post on a thread', async () => {
    const titleInput = 'input[name=top-post-title]';
    const bodyInput = '.top-post-form .public-DraftEditor-content';
    const submitButton = '.top-post-form .button-submit';
    const randomMessage = `Maëstro Kim-pem-bééé #${randomId}`;
    await page.waitForSelector(titleInput);
    await page.click(titleInput);
    await page.type(titleInput, 'Allez les bleus');
    await page.click(bodyInput);
    await page.type(bodyInput, randomMessage);
    await page.click(submitButton);
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
