import {Selector,ClientFunction} from 'testcafe'
import {CREDENTIALS,TODAY,URL,DATES} from '../data/constants.js'
import nanoid from 'nanoid'
import mainPage from '../pages/main-page.js'
import loginPage from '../pages/login-page.js'
import todayPage from '../pages/today-page.js'
import basePage from '../pages/base-page.js'

fixture ('Automation challenge with TestCafe')
    .page `${URL.BASE_URL}`
    
    .beforeEach(async t=>{
        await t.maximizeWindow()
    })

    .afterEach(async t=>{
        await t.pressKey('esc')
        await todayPage.deleteTasks()
        await todayPage.deleteProjects()
    })

//3
test.skip('As a user I want to create a new task for today as due date',async t =>{
    const idTitle       = nanoid()
    const idDescription = nanoid()

    await t.click(mainPage.loginLink)
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await t.click(basePage.inboxLink)
    await todayPage.createTaskToday((TODAY.TASKS.TITLE) + idTitle,(TODAY.TASKS.DESCRIPTION) + idDescription)
    await t.click(todayPage.tasksListElement.withText(idTitle)) 

    await t.expect(todayPage.dateTaskTodayLabel.innerText).eql(DATES.TODAY)
})

//4
test.skip('As a user I want to create a new task for tomorrow as due date',async t =>{
    const idTitle       = nanoid()
    const idDescription = nanoid()
    
    await t.click(mainPage.loginLink)
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await t.click(basePage.inboxLink)
    await todayPage.createTaskTomorrow((TODAY.TASKS.TITLE) + idTitle,(TODAY.TASKS.DESCRIPTION) + idDescription)
    await t.click(todayPage.tasksListElement.withText(idTitle))

    await t.expect(todayPage.dateTaskTomorrowLabel.innerText).eql(DATES.TOMORROW)
})

//5
test('As a user I want to create 10 tasks in a row for today as due date',async t=>{  //guardar en arrays y buscar uno por uno
    await t.click(mainPage.loginLink)
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await t.click(basePage.inboxLink)
    
    for (let index = 1; index <=10; index++) {
        const idTitle       = nanoid()
        const idDescription = nanoid()

        await todayPage.createTaskToday((TODAY.TASKS.TITLE) + index + ": " + idTitle,(TODAY.TASKS.DESCRIPTION) + index + ": " + idDescription)
        await t.click(todayPage.tasksListElement.withText(idTitle))

        await t.wait(1500)
        await t.expect(todayPage.dateTaskTodayLabel.innerText).eql(DATES.TODAY)
        await t.pressKey('esc')   
    }
})

//6
test.skip('As a user I want to create a proyect using a special color, adding it to favorites',async t=>{
    await t.click(mainPage.loginLink)
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await t.click(basePage.inboxLink)
    await todayPage.createProject((TODAY.PROJECTS.TITLE) + idTitle)
    //const con color de proyecto utilizando getAttribute()
    await t.expect(todayPage.newFavProjectLabel.innerText).contains(idTitle)
})

//7
test.skip('As a user I want to delete all my tasks I created previously',async t=>{
    await t.click(mainPage.loginLink)
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await t.click(basePage.inboxLink)
    await todayPage.deleteTasks()

    await t.expect(todayPage.newFavProjectLabel.exists).ok()
})