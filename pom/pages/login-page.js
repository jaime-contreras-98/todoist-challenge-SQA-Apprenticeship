import {Selector, t} from "testcafe";

class LoginPage{
    
    constructor(){
        this.inputUser      = Selector("#email");
        this.inputPassword  = Selector("#password");
        this.buttonLogin    = Selector("button").withText("Log in");
        this.labelError     = Selector(".error_msg");
    }

    async loginForm(username,password){
        await t
            .typeText   (this.inputUser,username) 
            .typeText   (this.inputPassword,password) 
            .click      (this.buttonLogin);
    }

    async loginFormWithoutPassword(username){
        await t
            .typeText   (this.inputUser,username) 
            .click      (this.buttonLogin);
    }

}

export default new LoginPage();
