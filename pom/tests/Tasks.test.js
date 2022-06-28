/* eslint-disable no-undef */
import {URL,DATES,MAIN_USER_ROLE} from "../data/constants.js";
import todayPage from "../pages/today-page.js";
import inboxPage from "../pages/inbox-page.js";

fixture("Add/delete tasks with TestCafe on todoist.com")
    .page `${URL.BASE_URL}`

    .beforeEach(async t=>{
        await t
            .maximizeWindow()
            .useRole(MAIN_USER_ROLE)
            .click(inboxPage.inboxLink);
    });

//3
test("As a user I want to create a new task for today as due date --tags {smoke}",async () =>{
    await todayPage.createTask(DATES.TODAY,1);

    await todayPage.validateTask(DATES.TODAY);
});

//4
test("As a user I want to create a new task for tomorrow as due date --tags {smoke}{regression}",async () =>{
    await todayPage.createTask(DATES.TOMORROW,1);

    await todayPage.validateTask(DATES.TOMORROW);
});

//5
test("As a user I want to create 10 tasks in a row for today as due date --tags {regression}",async ()=>{
    await todayPage.createTask(DATES.TODAY,10);

    await todayPage.validateTask(DATES.TODAY);
});

//7
test("As a user I want to delete all my tasks I created previously --tags {smokee}",async t=>{
    await todayPage.deleteTasks();

    await t.expect(todayPage.newFavProjectLabel.exists).ok();
});
