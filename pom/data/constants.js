import 'dotenv/config'

export const URL = {
    BASE_URL: "https://todoist.com/"
}

export const CREDENTIALS = {
    STANDARD_USER : {
        REAL_USERNAME: process.env.FRONT_LOGIN_USER,
        REAL_PASSWORD: process.env.FRONT_LOGIN_PASSWORD
    },
    FAKE_USER : {
        FAKE_USERNAME: process.env.FRONT_LOGIN_FAKE_USER,
        FAKE_PASSWORD: process.env.FRONT_LOGIN_FAKE_PASSWORD
    }
}

export const MESSAGES = {
    SUCCESS_LOGIN:  "Today"
}

export const ERROR_MESSAGES = {
    WRONG_USERNAME: "Invalid email address.",
    WRONG_PASSWORD: "Wrong email or password.",
    BLANK_INPUTS:   "Blank password."
}

export const TODAY = {
    TASKS:{
        TITLE:      "Title test", 
        DESCRIPTION:"Description test" 
    },
    PROJECTS:{
        TITLE:      "Project test"
    }
}

