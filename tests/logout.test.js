const data = require("../data");
const signIn = require("./signin.test");

describe("logout", () => {
  beforeEach(async () => {
    jest.setTimeout(100000);
    signIn();
  });
  test("I can logout from assembl", async () => {
    const userAccountDropdown = ".user-account";
    const bodyInput = ".top-post-form .public-DraftEditor-content";
    await page.waitForSelector(titleInput);
    await page.click(titleInput);
    await page.type(titleInput, "Allez les bleus");
    await page.click(bodyInput);
    await page.type(bodyInput, randomMessage);
    await page.click(submitButton);
    await expect(page).toMatch(randomMessage);
  });
});
