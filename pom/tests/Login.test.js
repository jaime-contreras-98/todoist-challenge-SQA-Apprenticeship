/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-undef */
/* eslint-disable-next-line no-unexpected-multiline */
import {CREDENTIALS,ERROR_MESSAGES , DATES, URL ,MAIN_USER_ROLE} from "../data/constants.js";
import mainPage from "../pages/main-page.js";
import loginPage from "../pages/login-page.js";
import todayPage from "../pages/today-page.js";

fixture("Login with TestCafe on Todoist webpage")
    .page `${URL.BASE_URL}`

    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .click(mainPage.loginFormLink);
    });

test.before(async t=> {
    await t.maximizeWindow();
})

//1
("As a user I want to log in using my credentials --tags {regression} {smoke}",async t => {
    await t.useRole(MAIN_USER_ROLE);

    await t.expect(todayPage.todayLabel.innerText).contains(DATES.TODAY);
});

//2.1
test("As a user I want to try to log in using without typing my password --tags {regression}",async t => {
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.USERNAME,null);

    await t.expect(loginPage.labelErrorPassword.innerText).eql(ERROR_MESSAGES.NO_PASSWORD);
});

//2.2
test("As a user I want to try to log in without typing my email --tags {regression}",async t => {
    await loginPage.loginForm(null,CREDENTIALS.STANDARD_USER.PASSWORD);

    await t.expect(loginPage.labelErrorEmail.innerText).eql(ERROR_MESSAGES.NO_EMAIL);
});

//2.3
test("As a user I want to try to log in using my email using invalid credentials --tags {regression}",async t => {
    await loginPage.loginForm(CREDENTIALS.FAKE_USER.USERNAME,CREDENTIALS.FAKE_USER.PASSWORD);

    await t.expect(loginPage.labelErrorEmail.innerText).eql(ERROR_MESSAGES.WRONG_CREDENTIALS);
});
