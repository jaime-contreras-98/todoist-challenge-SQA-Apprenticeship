import {Selector,ClientFunction} from 'testcafe';
import 'dotenv/config';
import { ERROR_MESSAGES } from '../data/constants.js';
import mainPage from '../pages/Main.element.js';
import loginPage from '../pages/Login.element.js';

const getLocation   =ClientFunction(() => document.location.href);
const user          =process.env.FRONT_LOGIN_USER;
const password      =process.env.FRONT_LOGIN_PASSWORD;
const fakeUser      =process.env.FRONT_LOGIN_FAKE_USER;
const fakePassword  =process.env.FRONT_LOGIN_FAKE_PASSWORD;

fixture ('Automation challenge with Testcafe')
    .page `https://todoist.com/`
    .beforeEach(async t=>{
        await t.maximizeWindow();
    });

//1 +
test.skip('As a user I want to log in using my credentials',async t =>{
    
    await t //TODO ESTO VA EN UNA FUNCION EN Login.element.js
        .click(mainPage.clickLogin) 
        .typeText(loginPage.txtFldUsername,`${user}`) 
        .typeText(loginPage.txtFldPassword,`${password}`) 
        .click(loginPage.btnLogin)

        .expect(getLocation()).eql('https://todoist.com/app/today',{timeout:7000}) //validar cualquier elemento del body
});

//2.1 - +
test('As a user I want to try to log in using an invalid username',async t =>{
    
    await t
        .click(mainPage.loginLink)
        .typeText(loginPage.txtFldUsername,`${fakeUser}`) 
        .typeText(loginPage.txtFldPassword,`${password}`) 
        .click(loginPage.btnLogin)

        .expect(loginPage.lblError.innerText).eql(ERROR_MESSAGES.WRONG_USERNAME); //objeto
});

//2.2 + -
test.skip('As a user I want to try to log in using an invalid password',async t =>{
    
    await t
        .click(mainPage.clickLogin)
        .typeText(loginPage.txtFldUsername,`${user}`) 
        .typeText(loginPage.txtFldPassword,`${fakePassword}`) 
        .click(loginPage.btnLogin)

        .expect((loginPage.lblError).exists).ok()
});

//2.3 - -
test.skip('As a user I want to try to log in using invalid credentials(username and password)',async t =>{

    await t
        .click(mainPage.clickLogin)
        .typeText(loginPage.txtFldUsername,`${fakeUser}`) 
        .typeText(loginPage.txtFldPassword,`${fakePassword}`) 
        .click(loginPage.btnLogin)

        .expect((loginPage.lblError).exists).ok()
});
