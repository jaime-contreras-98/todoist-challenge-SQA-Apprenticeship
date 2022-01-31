import {Selector, t} from 'testcafe'

class Today{
    constructor(){
        this.todayLabel             = Selector('span').withText("Today")
        //this.titleTaskLabel     = Selector('div').withAttribute('class',"markdown_content task_content")
        //this.descrTaskLabel     = Selector('div').withAttribute('class',"markdown_content task_description")
        this.newTaskButton          = Selector('button').withText("Add task")
        this.newTaskTitleInput      = Selector('div').withAttribute('class',"notranslate public-DraftEditor-content")
        this.newTaskDescrInput      = Selector('textarea').withAttribute('class',"task_editor__description_field no-focus-marker")
        this.dateTaskButton         = Selector('span').withAttribute('class',"date date_today")
        this.tomomorrowTaskButton   = Selector('button').withAttribute('class',"scheduler-suggestions-item")
    }

    async createTaskToday(title,description){
        await t
            .click      (this.newTaskButton)
            .typeText   (this.newTaskTitleInput,title)
            .typeText   (this.newTaskDescrInput,description)
            .click      (this.newTaskButton)
    }

    async createTaskTomorrow(title,description){
        await t 
            .click      (this.newTaskButton)
            .typeText   (this.newTaskTitleInput,title)
            .typeText   (this.newTaskDescrInput,description)
            .click      (this.dateTaskButton)
            .click      (this.tomomorrowTaskButton)
            .click      (this.newTaskButton)
    }

}

export default new Today()