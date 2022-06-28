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
        USERNAME: process.env.FRONT_LOGIN_USER,
        PASSWORD: process.env.FRONT_LOGIN_PASSWORD,
    },
    FAKE_USER: {
        USERNAME: process.env.FRONT_LOGIN_FAKE_USER,
        PASSWORD: process.env.FRONT_LOGIN_FAKE_PASSWORD
    }
};

export const ERROR_MESSAGES = {
    NO_PASSWORD: "Passwords must be at least 8 characters long.",
    NO_EMAIL: "Please enter a valid email address.",
    WRONG_CREDENTIALS: "Wrong email or password.",
};

export const INBOX = {
    TIMES: 0,
    TASKS: {
        TITLE: "Title test: ",
        DESCRIPTION: "Description test: "
    },
    PROJECTS: {
        TITLE: "Project test: "
    }
};

export const DATES = {
    TODAY: "Today",
    TOMORROW: "Tomorrow"
};

export const MAIN_USER_ROLE = Role(`${URL.BASE_URL}`,async t=> {
    await t.click(mainPage.loginFormLink);
    await loginPage.loginForm(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD);
});

