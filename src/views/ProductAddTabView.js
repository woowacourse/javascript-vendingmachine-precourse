import productAddTemplate from '../templates/product-add-template.js';

export default class ProductAddTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  render(products) {
    this.contentContainer.innerHTML = productAddTemplate.main;
    this.tableBody = document.querySelector('#product-manage-table > tbody');
    this.renderProductManageTableItems(products);
  }

  renderProductManageTableItems(products) {
    products.forEach((product) => {
      this.tableBody.innerHTML += productAddTemplate.tableItem(product);
    });
  }

  rerender(products) {
    this.tableBody.innerHTML = '';
    this.renderProductManageTableItems(products);
  }
}
