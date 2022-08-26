const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { ProductsPage } = require('../pages/products.page');

test('should login correctly', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.visit(page);
    await loginPage.login('standard_user', 'secret_sauce');
    expect(await productsPage.productsLabel.isEnabled()).toBe(true);
});
