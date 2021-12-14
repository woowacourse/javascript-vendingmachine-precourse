import productPurchaseMenu from "../components/product-purchase-menu.js";

export default class ProductPurchaseMenu {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }

  render(products, money) {
    this.contentContainer.innerHTML = productPurchaseMenu.tableHeader;
    this.tableBody = document.querySelector("#product-purchase-table > tbody");
    this.renderChargeAmount(money);
    this.renderProductPerchaseTableItems(products);
  }

  renderChargeAmount(money) {
    this.money = document.querySelector("#charge-amount");
    this.money.innerText = `${money}`;
  }

  renderProductPerchaseTableItems(products) {
    products.forEach((product) => {
      this.tableBody.innerHTML += productPurchaseMenu.tableRow(product);
    });
  }
}
