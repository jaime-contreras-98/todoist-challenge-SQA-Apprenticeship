import {Selector} from 'testcafe'

class BasePage{

    constructor(){
        this.todayLink      = Selector(".item_content").withText("Today")
    }
}

export default new BasePage()