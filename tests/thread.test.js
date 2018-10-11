const faker = require('faker');

const user = {
  email: faker.internet.email(),
  password: 'test',
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName()
};

const loginUser = {
  email: 'assemble2etesting@gmail.com',
  password: '123456'
};

describe('Assembl', () => {
  beforeEach(async () => {
    await page.goto('https://dev-assembl.bluenove.com/felixdebate/login');
    await page.waitForSelector('.login-container');
    await page.click('input[name=identifier]');
    await page.type('input[name=identifier]', loginUser.email);
    await page.click('input[name=password]');
    await page.type('input[name=password]', loginUser.password);
    await page.click("button[name='login']");
    await page.waitForSelector('.user-account');
  });

  xtest('I can post in a thread', async () => {
    await page.waitForSelector('.login-view');
    const signupForm = await page.$eval('.signup', el => (el ? true : false));
    expect(signupForm).toBe(true);
  });

  xtest('I can sign up in assembl', async () => {
    await page.waitForSelector('.login-view');
    await page.screenshot({ path: 'test.png' });
    await page.click('input[name=fullname]');
    await page.type('input[name=fullname]', user.firstname);
    await page.click('input[name=email]');
    await page.type('input[name=email]', user.email);
    await page.click('input[name=password]');
    await page.type('input[name=password]', user.password);
    await page.click('input[name=password2]');
    await page.type('input[name=password2]', user.password);
    await page.click('input[type=checkbox]');
    await page.click('button[type=submit]');
    await page.waitForSelector('.resendPwd');
    const submitConfirmation = await page.$eval(
      '.resendPwd',
      el => (el ? true : false)
    );
    expect(submitConfirmation).toBe(true);
  });

  xtest('I can sign in assembl', async () => {
    await page.goto('https://dev-assembl.bluenove.com/felixdebate/login');
    await page.waitForSelector('.login-container');
    await page.click('input[name=identifier]');
    await page.type('input[name=identifier]', loginUser.email);
    await page.click('input[name=password]');
    await page.type('input[name=password]', loginUser.password);
    await page.click("button[name='login']");
    await page.screenshot({ path: 'testoi.png' });
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
