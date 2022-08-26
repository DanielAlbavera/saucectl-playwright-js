const { page, locator } = require('@playwright/test')

export class LoginPage {
    
    usernameInput;
    passwordInput;
    submitButton;

    constructor(page) {
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.submitButton = page.locator('[data-test="login-button"]');
    }
    
    async visit(page) {
        await page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}