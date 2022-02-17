import {Selector, t} from "testcafe";

class TodayPage{

    constructor(){
        this.todayLabel              = Selector("span").withText("Today");
        this.dateTaskTodayLabel      = Selector(".date_today");
        this.dateTaskTomorrowLabel   = Selector(".date_tom");
        this.taskTitleLabel          = Selector(".public-DraftStyleDefault-ltr");
        this.newFavProjectLabel      = Selector(".simple_content");
        this.emptyNoTasksLabel       = Selector(".empty-state-header");   
        this.newTaskTitleInput       = Selector(".public-DraftEditor-content");
        this.newTaskDescrInput       = Selector(".task_editor__description_field");
        this.newProjectInput         = Selector("#edit_project_modal_field_name");
        this.newProjectColorDropdown = Selector(".color_dropdown_toggle");
        this.newProjectFavToggle     = Selector(".reactist_switch");
        this.tasksListElement        = Selector(".task_list_item");
        this.projectListElement      = Selector(".name"); 
        this.newTaskButton           = Selector("button").withText("Add task");
        this.dateTaskButton          = Selector(".item_due_selector");        
        this.todayTaskButton         = Selector(".scheduler-suggestions-item").withText("Today");
        this.tomomorrowTaskButton    = Selector(".scheduler-suggestions-item").withText("Tomorrow");
        this.newProjectButton        = Selector(".adder_icon"); 
        this.newProjectSaveButton    = Selector(".ist_button_red");
        this.deleteTaskButton        = Selector(".menu_item").withText("Delete task"); 
        this.deleteProjectButton     = Selector(".menu_label").withText("Delete project");
        this.confirmDeleteButton     = Selector(".reactist_button").withText("Delete");   
    }

    async createTask(title,description,date){ 
        await t
            .click      (this.newTaskButton)
            .typeText   (this.newTaskTitleInput,title)
            .typeText   (this.newTaskDescrInput,description)
            .click      (this.dateTaskButton);

        switch(date){
        case 1:
            await t.click(this.todayTaskButton);
            break;
        case 2:
            await t.click(this.tomomorrowTaskButton);
            break;
        default:
            console.log("Please choose a valid date.");
        }
        
        await t
            .click      (this.newTaskButton)
            .wait       (2000);
    }

    async createProject(title){
        await t
            .click      (this.newProjectButton)
            .typeText   (this.newProjectInput,title)
            .click      (this.newProjectColorDropdown);

        for(let i=0;i <= Math.floor((Math.random() * 100) % 20);i++){ 
            await t.pressKey("down");
        }

        await t
            .pressKey   ("enter")
            .click      (this.newProjectFavToggle)
            .click      (this.newProjectSaveButton)
            .wait       (2500);
    }

    async deleteTasks(){
        while(await this.tasksListElement.exists){
            await t  
                .rightClick (this.tasksListElement)
                .click      (this.deleteTaskButton)
                .click      (this.confirmDeleteButton)
                .wait       (1500);
        }
    }

    async deleteProjects(){    
        while(await this.projectListElement.exists){
            await t 
                .rightClick (this.projectListElement)
                .click      (this.deleteProjectButton)
                .click      (this.confirmDeleteButton)
                .wait       (1500);
        }
    }
}

export default new TodayPage();