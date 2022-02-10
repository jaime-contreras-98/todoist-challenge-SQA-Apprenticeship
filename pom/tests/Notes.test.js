import {Selector,ClientFunction} from 'testcafe'
import nanoid from 'nanoid'
import mainPage from '../pages/main-page.js'
import loginPage from '../pages/login-page.js'
import todayPage from '../pages/today-page.js'
import basePage from '../pages/base-page.js'
import {CREDENTIALS,TODAY,URL} from '../data/constants.js'

fixture ('Automation challenge with TestCafe')
    .page `${URL.BASE_URL}`
    
    .beforeEach(async t=>{
        await t.maximizeWindow()
    })

    .afterEach(async t=>{
  
    })

//3
test.skip('As a user I want to create a new task for today as due date',async t =>{
    //let todayDate=new Date()
    //let objeto=new todayPage()
    //let fecha=todayPage.deleteProjects(todayDate)
    const element = await Selector('div').withAttribute('class','markdown_content task_content')

    await t.click(mainPage.loginLink)
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await todayPage.createTaskToday((TODAY.TASKS.TITLE) + nanoid(),
                                    (TODAY.TASKS.DESCRIPTION) + nanoid()) 

    //today
    //await t.expect(element.innerText).eql("123")
    //await t.expect(todayPage.taskTitleLabel.innerText).contains("Today")
    //await t.expect(todayPage.taskDateLabel.innerText).contains((todayPage.deleteProjects(fecha))) //FECHA Y NOMBRE DE LA TASK
})

//4
test.skip('As a user I want to create a new task for tomorrow as due date',async t =>{
    await t.click(mainPage.loginLink)
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await todayPage.createTaskTomorrow((TODAY.TASKS.TITLE) + nanoid(),
                                       (TODAY.TASKS.DESCRIPTION) + nanoid())
    //FECHA MA;ANA 
})

//5
test.skip('As a user I want to create 10 tasks in a row for today as due date',async t=>{  //guardar en arrays y buscar uno por uno
    await t.click(mainPage.loginLink)
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    
    for (let index = 1; index <=10; index++) {
        await todayPage.createTaskToday((TODAY.TASKS.TITLE)         + index + ": " + nanoid(),
                                        (TODAY.TASKS.DESCRIPTION)   + index + ": " + nanoid())
    }
})

//6
test.skip('As a user I want to create a proyect using a special color, adding it to favorites',async t=>{
    await t.click(mainPage.loginLink)
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await todayPage.createProject((TODAY.PROJECTS.TITLE) + nanoid())
})

//7
test('As a user I want to delete all my tasks I created previously',async t=>{
    await t.click(mainPage.loginLink)
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.REAL_USERNAME,CREDENTIALS.STANDARD_USER.REAL_PASSWORD)
    await t.click(basePage.todayLink)
    await todayPage.deleteTasks()
    await t.wait(1500)

    await t.expect(todayPage.emptyNoTasks1Label.exists).ok()
})