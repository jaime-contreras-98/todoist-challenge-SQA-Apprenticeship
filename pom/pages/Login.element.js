import {Selector} from 'testcafe';

class Login{
    constructor(){
        this.txtFldUsername=Selector('#email'); //input o field
        this.txtFldPassword=Selector('#password'); //input o field
        this.btnLogin=Selector("button").withText("Log in"); //reduce
        this.lblError=Selector('div.error_block:nth-child(6) div.error_msg > span:nth-child(2)'); //reduce
    }
}

//objetos

export default new Login();

// faker lib