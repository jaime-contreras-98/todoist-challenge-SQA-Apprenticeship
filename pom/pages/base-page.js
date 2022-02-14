import {Selector} from "testcafe";

class BasePage{

    constructor(){
        this.inboxLink      = Selector(".item_content").withText("Inbox");
    }
}

export default new BasePage();