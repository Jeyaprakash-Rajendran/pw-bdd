export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
  }
}
