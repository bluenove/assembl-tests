const data = require("../data");

const signIn = async () => {
  await page.goto(`${data.url}/login`);
  await page.waitForSelector(".login-container");
  await page.click("input[name=identifier]");
  await page.type("input[name=identifier]", data.user.email);
  await page.click("input[name=password]");
  await page.type("input[name=password]", data.user.password);
  await page.click("button[name='login']");
  // check if the profile menu is visible
  await page.waitForSelector(".user-account");
  const profileMenu = await page.$eval(
    "#user-dropdown",
    el => (el ? true : false)
  );
};

describe("Assembl signin", () => {
  beforeEach(async () => {
    jest.setTimeout(100000);
    await page.goto(`${data.url}/login`);
  });

  test("I can sign in assembl", async () => {
    await page.waitForSelector(".login-container");
    await page.click("input[name=identifier]");
    await page.type("input[name=identifier]", data.user.email);
    await page.click("input[name=password]");
    await page.type("input[name=password]", data.user.password);
    await page.click("button[name='login']");
    // check if the profile menu is visible
    await page.waitForSelector(".user-account");
    const profileMenu = await page.$eval(
      "#user-dropdown",
      el => (el ? true : false)
    );
    expect(profileMenu).toBe(true);
  });
});

module.exports = signIn;
