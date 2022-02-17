/* eslint-disable no-undef */
import {TODAY,URL,DATES,MAIN_USER_ROLE} from "../data/constants.js";
import nanoid from "nanoid";
import todayPage from "../pages/today-page.js";
import basePage from "../pages/base-page.js";

fixture("Add/delete projects or tasks with TestCafe on Todoist.com")
    .page `${URL.BASE_URL}`
    
    .beforeEach(async t=>{
        await t.maximizeWindow();
    })

    .afterEach(async t=>{
        await t.pressKey("esc");
        await todayPage.deleteTasks();
        await todayPage.deleteProjects();
    });

//3
test("As a user I want to create a new task for today as due date --tags {smoke}",async t =>{
    const idTitle       = nanoid();
    const idDescription = nanoid();

    await t.useRole(MAIN_USER_ROLE);
    await t.click(basePage.inboxLink);
    await todayPage.createTask((TODAY.TASKS.TITLE) + idTitle,(TODAY.TASKS.DESCRIPTION) + idDescription, 1);
    await t.click(todayPage.tasksListElement.withText(idTitle)); 

    await t.expect(todayPage.dateTaskTodayLabel.innerText).eql(DATES.TODAY);
});

//4
test("As a user I want to create a new task for tomorrow as due date --tags {regression}",async t =>{
    const idTitle       = nanoid();
    const idDescription = nanoid();
    
    await t.useRole(MAIN_USER_ROLE);
    await t.click(basePage.inboxLink);
    await todayPage.createTask((TODAY.TASKS.TITLE) + idTitle,(TODAY.TASKS.DESCRIPTION) + idDescription, 2);
    await t.click(todayPage.tasksListElement.withText(idTitle));

    await t.expect(todayPage.dateTaskTomorrowLabel.innerText).eql(DATES.TOMORROW);
});

//5
test("As a user I want to create 10 tasks in a row for today as due date --tags {regression}",async t=>{ 
    await t.useRole(MAIN_USER_ROLE);
    await t.click(basePage.inboxLink);
    
    for (let index = 1; index <=10; index++) {
        const idTitle       = nanoid();
        const idDescription = nanoid();

        await todayPage.createTask((TODAY.TASKS.TITLE) + index + ": " + idTitle,(TODAY.TASKS.DESCRIPTION) + index + ": " + idDescription,1);
        await t.click(todayPage.tasksListElement.withText(idTitle));

        await t.expect(todayPage.dateTaskTodayLabel.innerText).eql(DATES.TODAY);
        await t.pressKey("esc");   
    }
});

//6
test("As a user I want to create a proyect using a special color, adding it to favorites --tags {smoke}",async t=>{
    const idTitle = nanoid();

    await t.useRole(MAIN_USER_ROLE);
    await t.click(basePage.inboxLink);
    await todayPage.createProject((TODAY.PROJECTS.TITLE) + idTitle);

    await t.expect(todayPage.newFavProjectLabel.innerText).contains(idTitle);
});

//7
test("As a user I want to delete all my tasks I created previously --tags {smoke}",async t=>{
    await t.useRole(MAIN_USER_ROLE);
    await t.click(basePage.inboxLink);
    await todayPage.deleteTasks();

    await t.expect(todayPage.newFavProjectLabel.exists).ok();
});