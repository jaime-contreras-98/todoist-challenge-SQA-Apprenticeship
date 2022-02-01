import {Selector, t} from 'testcafe'

class Today{
    constructor(){
        this.todayLabel             = Selector('span').withText("Today")
        //this.titleTaskLabel     = Selector('div').withAttribute('class',"markdown_content task_content")
        //this.descrTaskLabel     = Selector('div').withAttribute('class',"markdown_content task_description")
        
        this.newTaskTitleInput      = Selector('div').withAttribute('class',"notranslate public-DraftEditor-content")
        this.newTaskDescrInput      = Selector('textarea').withAttribute('class',"task_editor__description_field no-focus-marker")
        this.newProjectInput        = Selector('#edit_project_modal_field_name')
        
        this.newProjectColorDropDown= Selector('button').withAttribute("color_dropdown_toggle form_field_control")
        
        this.newTaskButton          = Selector('button').withText("Add task")
        this.dateTaskButton         = Selector('span').withAttribute('class',"date date_today")
        this.tomomorrowTaskButton   = Selector('button').withAttribute('class',"scheduler-suggestions-item")
        this.newProjectButton       = Selector('div.left_menu.new_side_bar_design div:nth-child(1) div.sidebar_expansion_panel.expansion_panel.expansion_panel--expanded div.expansion_panel__header div.expansion_panel__actions > button.adder_icon')
        this.newProjectSaveButton   = Selector('button').withAttribute('class',"ist_button ist_button_red")
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

    async createProject(title){
        await t
            .click      (this.newProjectButton)
            .typeText   (this.newProjectInput,title)
            .click      (this.newProjectSaveButton)
    }

}

export default new Today()