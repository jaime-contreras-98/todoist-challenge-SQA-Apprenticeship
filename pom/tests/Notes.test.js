import {Selector,ClientFunction} from 'testcafe'
import mainPage from '../pages/Main.element.js'
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
    let todayDate=new Date()
    let objeto=new todayPage()
    let fecha=todayPage.funcion(todayDate)

    await mainPage.clickLoginLink()
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await todayPage.createTaskToday((TODAY.TASKS.TITLE),(TODAY.TASKS.DESCRIPTION)) 

    //await t.expect(todayPage.taskDateLabel.innerText).contains((objeto.(fecha)))
    //await t.expect(todayPage.taskDateLabel.innerText).contains((todayPage.taskDate(fecha))) //FECHA Y NOMBRE DE LA TASK
})

//4
test('As a user I want to create a new task for tomorrow as due date',async t =>{
    await mainPage.clickLoginLink()
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await todayPage.createTaskTomorrow(TODAY.TASKS.TITLE,TODAY.TASKS.DESCRIPTION)
    //FECHA MA;ANA 
})

//5
test.skip('As a user I want to create 10 tasks in a row for today as due date',async t=>{
    await mainPage.clickLoginLink()
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    
    for (let index = 1; index <=10; index++) {
        await todayPage.createTaskToday((TODAY.TASKS.TITLE)+": "+index,(TODAY.TASKS.DESCRIPTION)+": "+index) //CREATIVIDAD 
    }
})

//6
test.skip('As a user I want to create a proyect using a special color, adding it to favorites',async t=>{
    await mainPage.clickLoginLink()
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await todayPage.createProject(TODAY.PROJECTS.TITLE)
})

//7
test.skip('As a user I want to delete all my tasks I created previously',async t=>{
    //patron monitor o en un afterEach()


})

