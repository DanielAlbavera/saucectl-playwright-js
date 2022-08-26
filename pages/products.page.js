const { page, locator } = require('@playwright/test');

export class ProductsPage {

    productsLabel;

    constructor(page) {
        this.productsLabel = page.locator('text="Products"');
    }

}