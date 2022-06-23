import {Selector, t} from "testcafe";

class LoginPage{

    constructor(){
        this.inputUser          = Selector("#labeled-input-1");
        this.inputPassword      = Selector("#labeled-input-3");
        this.buttonLogin        = Selector(".nFxHGeI.S7Jh9YX");
        this.labelErrorEmail    = Selector("._2282cb83._087a8179");
        this.labelErrorPassword = Selector(".jMjOg3K._2282cb83");
    }

    async loginForm(username,password){
        if(username!=null){
            await t.typeText(this.inputUser,username);
        }
        if(password!=null){
            await t.typeText(this.inputPassword,password);
        }

        await t.click(this.buttonLogin);
    }
}

export default new LoginPage();
