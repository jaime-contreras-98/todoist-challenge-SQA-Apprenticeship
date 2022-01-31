import {Selector,ClientFunction} from 'testcafe'
import loginPage from '../pages/Login.element.js'
import todayPage from '../pages/Today.elements.js'
import {CREDENTIALS,MESSAGES,TASKS,URL} from '../data/constants.js'

fixture ('Automation challenge with TestCafe')
    .page `${URL.BASE_URL}`
    .beforeEach(async t=>{
        await t.maximizeWindow()
    })

//3
test.skip('As a user I want to create a new task for today as due date',async t =>{
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await todayPage.createTaskToday(TASKS.TITLE,TASKS.DESCRIPTION)
    //await t.expect(todayPage.todayLabel)
})

//4
test('As a user I want to create a new task for tomorrow as due date',async t =>{
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await todayPage.createTaskTomorrow(TASKS.TITLE,TASKS.DESCRIPTION)
})


