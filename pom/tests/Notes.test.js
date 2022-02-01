import {Selector,ClientFunction} from 'testcafe'
import loginPage from '../pages/Login.element.js'
import todayPage from '../pages/Today.elements.js'
import {CREDENTIALS,TODAY,URL} from '../data/constants.js'

fixture ('Automation challenge with TestCafe')
    .page `${URL.BASE_URL}`
    .beforeEach(async t=>{
        await t.maximizeWindow()
    })

//3
test.skip('As a user I want to create a new task for today as due date',async t =>{
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await todayPage.createTaskToday(TODAY.TASKS.TITLE,TODAY.TASKS.DESCRIPTION)
    //await t.expect(todayPage.todayLabel)
})

//4
test.skip('As a user I want to create a new task for tomorrow as due date',async t =>{
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await todayPage.createTaskTomorrow(TODAY.TASKS.TITLE,TODAY.TASKS.DESCRIPTION)
})

//5
test('As a user I want to create 10 tasks in a row for today as due date',async t=>{
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    for (let index = 0; index < 9; index++) {
        await todayPage.createTaskToday(TODAY.TASKS.TITLE,TODAY.TASKS.DESCRIPTION)
    }
})

//6
test.skip('As a user I want to create a proyect using a special color',async t=>{
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await todayPage.createProject(TODAY.PROJECTS.TITLE)
})

//7
test.skip('As a user I want to delete all my tasks I created previously',async t=>{

    
})

