import {Selector, t} from 'testcafe'

class MainPage{

    constructor(){
        this.loginLink      = Selector("a").withText("Log in")
    }

    async clickLoginLink(){
        await t 
            .click(this.loginLink)
    }
}

export default new MainPage()
