import {Selector, t} from "testcafe";
import {CREDENTIALS} from "../data/constants.js";

class LoginPage{
    
    constructor(){
        this.inputUser      = Selector("#email");
        this.inputPassword  = Selector("#password");
        this.buttonLogin    = Selector("button").withText("Log in");
        this.labelError     = Selector(".error_msg");
    }

    async loginForm(test){
        switch(test){
        case 1:
            await this.loginFields(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD);
            break;
        case 2:
            await this.loginFields(CREDENTIALS.FAKE_USER.FAKE_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD);
            break;
        case 3:
            await this.loginFields(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.FAKE_USER.FAKE_PASSWORD);
            break;
        case 4:
            await this.loginFields(CREDENTIALS.STANDARD_USER.REAL_USERNAME);
            break;
        default:
            console.log("Choose a valid option..."); 
        }

        await t.click(this.buttonLogin);
    }

    async loginFields(username,password){
        await t.typeText   (this.inputUser,username);

        if(password!=undefined){
            await t.typeText   (this.inputPassword,password);
        }else{
            console.log("This is undefined!");
        } 
    }
}

export default new LoginPage();
