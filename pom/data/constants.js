/* eslint-disable no-undef */
import "dotenv/config";
import {Role} from "testcafe";
import mainPage from "../pages/main-page.js";
import loginPage from "../pages/login-page.js";

export const URL = {
    BASE_URL: "https://todoist.com/",
};

export const CREDENTIALS = {
    STANDARD_USER: {
        REAL_USERNAME: process.env.FRONT_LOGIN_USER,
        REAL_PASSWORD: process.env.FRONT_LOGIN_PASSWORD,
        EMPTY_PASSWORD: process.env.EMPTY_PASSWORD
    },
    FAKE_USER: {
        FAKE_USERNAME: process.env.FRONT_LOGIN_FAKE_USER,
        FAKE_PASSWORD: process.env.FRONT_LOGIN_FAKE_PASSWORD
    }
};

export const ERROR_MESSAGES = {
    WRONG_USERNAME: "Invalid email address.",
    WRONG_PASSWORD: "Wrong email or password.",
    BLANK_INPUTS: "Blank password."
};

export const TODAY = {
    TASKS: { 
        TITLE: "Title test ", 
        DESCRIPTION: "Description test " 
    },
    PROJECTS: {
        TITLE: "Project test "
    }
};

export const DATES = {
    TODAY: "Today",
    TOMORROW: "Tomorrow"
};

export const MAIN_USER_ROLE = Role(`${URL.BASE_URL}`,async t=> {
    await t.click(mainPage.loginLink); 
    await loginPage.loginForm(1);
});
    
