/* eslint-disable no-undef */
import {URL,MAIN_USER_ROLE} from "../data/constants.js";
import todayPage from "../pages/today-page.js";
import basePage from "../pages/inbox-page.js";

fixture("Add/delete projects with TestCafe on todoist.com")
    .page(`${URL.BASE_URL}`)

    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .useRole(MAIN_USER_ROLE)
            .click(basePage.inboxLink);
    })
    .afterEach(async () => {
        await todayPage.deleteProjects();
    });

test("As a user I want to create a proyect using a special color, adding it to favorites --tags {smoke}",async () => {
    await todayPage.createProject(1);

    await todayPage.validateProject();
});

test("As a user I want to delete all my projects I created previously --tags {smoke}",async t=>{
    await todayPage.deleteProjects();

    await t.expect(todayPage.newFavProjectLabel.exists).ok();
});
