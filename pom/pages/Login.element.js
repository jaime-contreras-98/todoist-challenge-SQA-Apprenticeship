import {Selector, t} from 'testcafe'
import mainPage from '../pages/Main.element.js'

class Login{
    constructor(){
        this.inputUser      = Selector('#email')
        this.inputPassword  = Selector('#password')
        this.buttonLogin    = Selector('button').withText("Log in")
        this.labelError     = Selector('span').with("")
    }

    async loginForm(username,password){
        await t
            .click      (mainPage.loginLink) 
            .typeText   (this.inputUser,username) 
            .typeText   (this.inputPassword,password) 
            .click      (this.buttonLogin)
    }

    async loginFormWithoutPassword(username){
        await t
            .click      (mainPage.loginLink) 
            .typeText   (this.inputUser,username) 
            .click      (this.buttonLogin)
    }

}

export default new Login()

// faker lib