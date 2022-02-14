/* eslint-disable no-undef */
import {CREDENTIALS, ERROR_MESSAGES , DATES, URL} from "../data/constants.js";
import mainPage from "../pages/main-page.js";
import loginPage from "../pages/login-page.js";
import todayPage from "../pages/today-page.js";

fixture("Login with TestCafe on Todoist webpage")
    .page `${URL.BASE_URL}`

    .beforeEach(async t => {
        await t.maximizeWindow();
    });

//1 
test("As a user I want to log in using my credentials --tags {smoke}",async t => { 
    await t.click(mainPage.loginLink);
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD);

    await t.expect(todayPage.todayLabel.innerText).contains(DATES.TODAY);
}); 

//2.1
test("As a user I want to try to log in using an invalid email --tags {regression}",async t => { 
    await t.click(mainPage.loginLink);
    await loginPage.loginForm(CREDENTIALS.FAKE_USER.FAKE_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD);

    await t.expect(loginPage.labelError.innerText).eql(ERROR_MESSAGES.WRONG_USERNAME);
});

//2.2
test("As a user I want to try to log in using an invalid password --tags {regression}",async t => {
    await t.click(mainPage.loginLink);
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.FAKE_USER.FAKE_PASSWORD);

    await t.expect(loginPage.labelError.innerText).eql(ERROR_MESSAGES.WRONG_PASSWORD);
});

//2.3 
test("As a user I want to try to log in using my email without typing my password --tags {regression}",async t => {
    await t.click(mainPage.loginLink);
    await loginPage.loginFormWithoutPassword(CREDENTIALS.STANDARD_USER.REAL_USERNAME);
    
    await t.expect(loginPage.labelError.innerText).eql(ERROR_MESSAGES.BLANK_INPUTS);
});