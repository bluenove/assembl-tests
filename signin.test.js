const data = require('./data');

const loginUser = {
  email: 'assemble2etesting@gmail.com',
  password: '123456'
};

describe('Assembl signin', () => {
  beforeEach(async () => {
    await page.goto(`${data.url}/login`);
  });

  test('I can sign in assembl', async () => {
    await page.waitForSelector('.login-container');
    await page.click('input[name=identifier]');
    await page.type('input[name=identifier]', loginUser.email);
    await page.click('input[name=password]');
    await page.type('input[name=password]', loginUser.password);
    await page.click("button[name='login']");
    // check if the profile menu is visible
    await page.waitForSelector('.user-account');
    const profileMenu = await page.$eval(
      '#user-dropdown',
      el => (el ? true : false)
    );
    expect(profileMenu).toBe(true);
  });
});

//   test("should display the title of the page", async () => {
//     // Timeout are for waiting the answer not for waiting a specific component.
//     await page.waitForSelector(".light-title-1");
//     await page.screenshot({ path: "test.png" });
//     const titleValue = await page.$eval(".light-title-1", el => el.innerText);
//     // needs to be in english because default value whn no cookie in the browser.
//     await expect(titleValue).toMatch(
//       "Governing the rise of Artificial Intelligence"
//     );
//   });
//   test("nav loads correctly", async () => {
//     await page.waitForSelector("#navbar");
//     await page.screenshot({ path: "test1.png" });
//     const navbar = await page.$eval("#navbar", el => (el ? true : false));
//     const listItems = await page.$$(".navbar-menu-item");
//
//     expect(navbar).toBe(true);
//     expect(listItems.length).toBe(4);
//   });
// });
