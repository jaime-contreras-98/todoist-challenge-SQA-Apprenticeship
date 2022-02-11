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
        this.taskTitleLabel         = Selector('.public-DraftStyleDefault-ltr')
        this.emptyNoTasksLabel      = Selector('.empty-state-header')   
        this.newTaskTitleInput      = Selector('.public-DraftEditor-content')
        this.newTaskDescrInput      = Selector('.task_editor__description_field')
        this.newProjectInput        = Selector('#edit_project_modal_field_name')
        this.newProjectColorDropdown= Selector('.color_dropdown_toggle')
        this.newProjectFavToggle    = Selector('.reactist_switch')
        this.tasksListElement       = Selector('.task_list_item') 
        this.newTaskButton          = Selector('button').withText("Add task")
        this.dateTaskButton         = Selector('.item_due_selector').withText("Schedule")
        this.todayTaskButton        = Selector('.scheduler-suggestions-item').withText("Today")
        this.tomomorrowTaskButton   = Selector('.scheduler-suggestions-item').withText("Tomorrow")
        this.newProjectButton       = Selector('.adder_icon') 
        this.newProjectSaveButton   = Selector('.ist_button_red')
        this.deleteTaskButton       = Selector('.menu_item').withText('Delete task') 
        this.confirmDeleteTaskButton= Selector('.reactist_button').withText('Delete')   
    }

    async createTaskToday(title,description){
        await t
            .click      (this.newTaskButton)
            .typeText   (this.newTaskTitleInput,title)
            .typeText   (this.newTaskDescrInput,description)
            .click      (this.dateTaskButton)
            .click      (this.todayTaskButton)
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
        while(await this.tasksListElement.exists){
                await t  
                    .rightClick (this.tasksListElement)
                    .click      (this.deleteTaskButton)
                    .click      (this.confirmDeleteTaskButton)
            }
        }
    }

export default new TodayPage()