import productPurchaseTemplate from '../templates/product-purchase-template.js';

export default class ProductPurchaseTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  render(products) {
    this.contentContainer.innerHTML = productPurchaseTemplate.main;
    this.productPurchaseTableBody = document.querySelector('#product-purchase-table > tbody');
    this.renderProductPurchaseTableBodyItems(products);
  }

  renderProductPurchaseTableBodyItems(products) {
    products.forEach((product) => {
      this.productPurchaseTableBody.innerHTML += productPurchaseTemplate.tableItem(product);
    });
  }
}
