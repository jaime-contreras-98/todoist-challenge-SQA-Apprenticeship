import {Selector, t} from 'testcafe'

class Login{
    constructor(){
        this.inputUser      = Selector('#email')
        this.inputPassword  = Selector('#password')
        this.buttonLogin    = Selector('button').withText("Log in")
        this.labelError     = Selector('div').withAttribute('class',"error_msg")
    }

    async loginForm(username,password){
        await t
            .typeText   (this.inputUser,username) 
            .typeText   (this.inputPassword,password) 
            .click      (this.buttonLogin)
    }

    async loginFormWithoutPassword(username){
        await t
            .typeText   (this.inputUser,username) 
            .click      (this.buttonLogin)
    }

}

export default new Login()

// faker lib