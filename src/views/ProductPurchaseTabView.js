import productPurchaseTemplate from '../templates/product-purchase-template.js';

export default class ProductPurchaseTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  render(charge, products) {
    this.contentContainer.innerHTML = productPurchaseTemplate.main;
    this.chargeAmountElement = document.querySelector('#charge-amount');
    this.productPurchaseTableBody = document.querySelector('#product-purchase-table > tbody');
    this.renderChargeAmount(charge);
    this.renderProductPurchaseTableBodyItems(products);
  }

  renderChargeAmount(charge) {
    this.chargeAmountElement.innerText = `${charge}원`;
  }

  renderProductPurchaseTableBodyItems(products) {
    products.forEach((product) => {
      this.productPurchaseTableBody.innerHTML += productPurchaseTemplate.tableItem(product);
    });
  }
}
