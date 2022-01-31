import {Selector} from 'testcafe'

class Today{
    constructor(){
        this.todayLabel     = Selector('span').withText("Today")
    }
}

export default new Today()