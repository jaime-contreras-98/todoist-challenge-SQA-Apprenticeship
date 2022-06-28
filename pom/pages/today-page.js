import {Selector, t} from "testcafe";
import {INBOX,DATES} from "../data/constants.js";
import nanoid from "nanoid";

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
        this.projectListElement      = Selector("li[data-type='project_list_item']");
        this.projectElementOptions   = Selector(".icon_menu_item__content").withText("Delete project");
        this.editProjectMenuButton   = Selector("div[class='view_header__actions'] button:nth-child(4)");
        this.newTaskButton           = Selector("button").withText("Add task");
        this.dateTaskButton          = Selector(".item_due_selector");
        this.todayTaskButton         = Selector(".scheduler-suggestions-item").withText("Today");
        this.tomomorrowTaskButton    = Selector(".scheduler-suggestions-item").withText("Tomorrow");
        this.newProjectButton        = Selector("button[data-track='navigation|projects_quick_add']");
        this.newProjectSaveButton    = Selector(".ist_button_red");
        this.deleteTaskButton        = Selector(".menu_item").withText("Delete task");
        this.deleteProjectButton     = Selector(".menu_label").withText("Delete project");
        this.confirmDeleteButton     = Selector("span[class='_09c23660']").withText("Delete");
    }

    async createTask(date,tasksNumber){
        for (let i = 0; i < tasksNumber; i++){
            const idTitle = INBOX.TASKS.TITLE + nanoid() + " " + (i+1);
            const idDescription = INBOX.TASKS.DESCRIPTION + nanoid() + " " + (i+1);

            await t
                .click(this.newTaskButton)
                .typeText(this.newTaskTitleInput,idTitle)
                .typeText(this.newTaskDescrInput,idDescription)
                .click(this.dateTaskButton);

            switch(date){
            case DATES.TODAY:
                await t.click(this.todayTaskButton);
                break;
            case DATES.TOMORROW:
                await t.click(this.tomomorrowTaskButton);
                break;
            default:
                console.log("Please choose a valid date.");
            }

            await t
                .click(this.newTaskButton)
                .wait(2000);
        }
    }

    async createProject(projectsNumber){
        for (let i = 0; i < projectsNumber; i++) {
            const idProject = INBOX.PROJECTS.TITLE + nanoid() + " " + (i+1);

            await t
                .click(this.newProjectButton)
                .typeText(this.newProjectInput,idProject)
                .click(this.newProjectColorDropdown);

            for(let i=0;i <= Math.floor((Math.random() * 100) % 20);i++){
                await t.pressKey("down");
            }

            await t
                .pressKey("enter")
                .click(this.newProjectFavToggle)
                .click(this.newProjectSaveButton)
                .wait(2500);
        }
    }

    async validateTask(date){
        while(await this.tasksListElement.exists){
            await t.click(this.tasksListElement);

            if(date === DATES.TODAY){
                await t.expect(this.dateTaskTodayLabel.innerText).eql(DATES.TODAY);
            }
            else if(date === DATES.TOMORROW){
                await t.expect(this.dateTaskTomorrowLabel.innerText).eql(DATES.TOMORROW);
            }

            await t
                .wait(1000)
                .pressKey("esc")
                .rightClick(this.tasksListElement)
                .click(this.deleteTaskButton)
                .click(this.confirmDeleteButton)
                .wait(1500);
        }
    }

    async deleteTasks(){
        while(await this.tasksListElement.exists){
            await t
                .rightClick(this.tasksListElement)
                .click(this.deleteTaskButton)
                .click(this.confirmDeleteButton)
                .wait(1500);
        }
    }

    async validateProject(){
        while(await this.projectListElement.exists){
            await t
                .click(this.projectListElement)
                .expect(this.newFavProjectLabel.innerText).contains(INBOX.PROJECTS.TITLE)
                .wait(1000)
                .click(this.editProjectMenuButton)
                .click(this.projectElementOptions)
                .click(this.confirmDeleteButton)
                .wait(1500);
        }
    }

    async deleteProjects(){
        while(await this.projectListElement.exists){
            await t
                .rightClick(this.projectListElement)
                .click(this.deleteProjectButton)
                .click(this.confirmDeleteButton)
                .wait(1500);
        }
    }
}

export default new TodayPage();
