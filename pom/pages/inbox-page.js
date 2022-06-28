import {Selector} from "testcafe";

class InboxPage{

    constructor(){
        this.inboxLink = Selector("#filter_inbox");
    }
}

export default new InboxPage();
