import productPurchaseMenu from "../components/product-purchase-menu.js";
import { getData, setData } from "../utils/localStorage.js";

export default class ProductPurchaseMenu {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }

  render(products, money) {
    this.contentContainer.innerHTML = productPurchaseMenu.tableHeader;
    this.tableBody = document.querySelector("#product-purchase-table > tbody");
    this.initElements();
    this.renderChargeAmount(money);
    this.renderProductPurchaseTableItems(products);
  }

  renderChargeAmount(money) {
    this.money = document.querySelector("#charge-amount");
    this.money.innerText = `${money}`;
  }

  renderProductPurchaseTableItems(products) {
    products.forEach((product) => {
      this.tableBody.innerHTML += productPurchaseMenu.tableRow(product);
    });
  }

  initElements() {
    this.coin500Quantity = document.querySelector("#coin-500-quantity");
    this.coin100Quantity = document.querySelector("#coin-100-quantity");
    this.coin50Quantity = document.querySelector("#coin-50-quantity");
    this.coin10Quantity = document.querySelector("#coin-10-quantity");
  }

  renderReturnCoin() {
    let returnMoney = getData("return");
    this.coin500Quantity.innerText = `${returnMoney.coin500Quantity}개`;
    this.coin100Quantity.innerText = `${returnMoney.coin100Quantity}개`;
    this.coin50Quantity.innerText = `${returnMoney.coin50Quantity}개`;
    this.coin10Quantity.innerText = `${returnMoney.coin10Quantity}개`;
  }
}
