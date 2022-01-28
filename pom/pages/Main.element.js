import {Selector} from 'testcafe';

class MainPage{
    constructor(){
        this.loginLink=Selector("a").withText("Log in");
    }
}

export default new MainPage();
