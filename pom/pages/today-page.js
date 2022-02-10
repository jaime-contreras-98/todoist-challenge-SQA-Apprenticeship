import {Selector, t} from 'testcafe'
import XPathSelector from '../data/xpath-selector'

class TodayPage{

    constructor(){
        /** 
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
        **/
        //this.taskDateLabel          = Selector('a').withAttribute('href',"/app/search/"+funcion(date))
        //this.taskDate               = Selector('input').withAttribute('value',`${date}`)
        //this.tasksListElements      = Selector('ul').withAttribute('class',"items")
        //this.tasksListElements      = XPathSelector('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/section[1]/div[1]/ul[1]/li[1]/div[1]')
        //this.todayTaskButton        = Selector('button').withAttribute('data-track',"scheduler|date_shortcut_today")
                                      //Selector('div').withAttribute('class',"task_list_item__content__wrapper")

        this.todayLabel             = Selector('span').withText("Today")
        this.taskTitleLabel         = Selector('.markdown_content task_content')
        
        this.newTaskTitleInput      = Selector('div').withAttribute('class',"notranslate public-DraftEditor-content")
        this.newTaskDescrInput      = Selector('.task_editor__description_field')
        this.newProjectInput        = Selector('#edit_project_modal_field_name')
        
        this.newProjectColorDropdown= Selector('.color_dropdown_toggle form_field_control')

        this.newProjectFavToggle    = Selector('.reactist_switch')

        this.tasksListElements      = Selector('.task_list_item') 

        this.newTaskButton          = Selector('button').withText("Add task")
        this.dateTaskButton         = Selector('.reactist_switch')

        this.tomomorrowTaskButton   = Selector('.scheduler-suggestions-item')
        this.newProjectButton       = Selector('div.left_menu.new_side_bar_design div:nth-child(1) div.sidebar_expansion_panel.expansion_panel.expansion_panel--expanded div.expansion_panel__header div.expansion_panel__actions > button.adder_icon') //
        this.newProjectSaveButton   = Selector('.ist_button ist_button_red')
        this.tasksOptionsMenuButton = Selector('.task_list_item__actions task_list_item__actions--active')

        this.taskRightClick         = XPathSelector("/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/section[1]/div[1]/ul[1]/li[1]/div[1]")

        this.deleteTaskButton       = Selector('div').withExactText('Delete task') //BUSCAR CLASES
        this.confirmDeleteTaskButton= Selector('button').withExactText('Delete')    //BUSCAR CLASES
        this.emptyNoTasks1Label     = Selector('.empty-state-header')        
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

    async deleteTasks(){
        while(await this.tasksListElements.exists){
                await t  
                    .rightClick (this.tasksListElements)
                    .click      (this.deleteTaskButton)
                    .click      (this.confirmDeleteTaskButton)
            }
        }
    }

export default new TodayPage()