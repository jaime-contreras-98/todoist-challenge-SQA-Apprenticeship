import {Selector,ClientFunction} from 'testcafe'
import { CREDENTIALS, ERROR_MESSAGES , MESSAGES, URL } from '../data/constants.js'
import loginPage from '../pages/Login.element.js'
import todayPage from '../pages/Today.elements.js'

const getLocation   =ClientFunction(() => document.location.href)

fixture ('Automation challenge with Testcafe')
    .page `${URL.BASE_URL}`
    .beforeEach(async t=>{
        await t.maximizeWindow()
    });

//1 
test('As a user I want to log in using my credentials',async t =>{
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await t.expect(todayPage.todayLabel.innerText).contains(MESSAGES.SUCCESS_LOGIN)
});

//2.1
test.skip('As a user I want to try to log in using an invalid email',async t =>{ 
    await loginPage.loginForm(CREDENTIALS.FAKE_USER.FAKE_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await t.expect(loginPage.labelError.innerText).eql(ERROR_MESSAGES.WRONG_USERNAME)
});

//2.2
test.skip('As a user I want to try to log in using an invalid password',async t =>{
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.FAKE_PASSWORD)
    await t.expect(loginPage.labelError.innerText).eql(ERROR_MESSAGES.WRONG_PASSWORD)
});

//2.3 
test.skip('As a user I want to try to log in using my email without typing my password',async t =>{
    await loginPage.loginFormWithoutPassword(CREDENTIALS.STANDARD_USER.REAL_USERNAME)
    await t.expect(loginPage.labelError.innerText).eql(ERROR_MESSAGES.BLANK_INPUTS)
});
