import {Selector, t} from 'testcafe'

class Today{

    constructor(){
        let date=new Date()
        
        function funcion(date) {
            var d = new Date(date),
            
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
            if (month.length < 2){
                month = '0' + month;   
            }
            if (day.length < 2){
                day = '0' + day;
            }
            return [year, month, day].join('-');
        }

        this.todayLabel             = Selector('span').withText("Today")
        this.taskDateLabel          = Selector('a').withAttribute('href',"/app/search/"+funcion(date))
        //this.taskDate               = Selector('input').withAttribute('value',`${date}`)
        
        this.newTaskTitleInput      = Selector('div').withAttribute('class',"notranslate public-DraftEditor-content")
        this.newTaskDescrInput      = Selector('textarea').withAttribute('class',"task_editor__description_field no-focus-marker")
        this.newProjectInput        = Selector('#edit_project_modal_field_name')
        
        this.newProjectColorDropdown= Selector('button').withAttribute('class',"color_dropdown_toggle form_field_control")

        this.newProjectFavToggle    = Selector('div').withAttribute('class',"reactist_switch")
        
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
            .click      (this.newProjectColorDropdown)

            for(let i=0;i <= Math.floor((Math.random() * 100) % 20);i++){ 
                await t.pressKey('down')
            }
            await t.pressKey('enter')

            .click      (this.newProjectFavToggle)
            .click      (this.newProjectSaveButton)
    }

    async deleteProjects(){
       
    }

}

export default new Today()