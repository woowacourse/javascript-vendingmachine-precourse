import PurchaseModel from "./purchaseModel.js";
import PurchaseView from "./purchaseView.js";

export default class PurchaseController {
  constructor(product, coinStorage) {
    this.model = new PurchaseModel();
    this.view = new PurchaseView();
    this.product = product;
    this.coinStorage = coinStorage;
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.initPage();
    this.initDOMS();
    this.setEvent();
    this.updatePage();
  };

  initDOMS = () => {
    this.$chargeInput = document.getElementById("charge-input");
    this.$chargeButton = document.getElementById("charge-button");
    this.$chargeAmountContainer = document.getElementById("charge-amount");
    this.$purchaseTableBody = document.getElementById("purchase-table-body");
  };

  initPage = () => {
    this.view.renderPage(this.$container);
    this.coinStorage.view.renderChangesComponent(this.$container);
  };

  setEvent = () => {
    this.$chargeButton.addEventListener("click", this.setClickChargeButtonEvent);
    this.$container.addEventListener("click", this.setClickPurchaseButtonEvent);
  };

  setClickChargeButtonEvent = () => {
    const money = Number(this.$chargeInput.value);

    try {
      this.model.chargeMoney(money);
      this.updatePage();
    } catch (err) {
      alert(err);
    }
  };

  setClickPurchaseButtonEvent = ({ target }) => {
    if (target.className !== "purchase-button") return;

    const product = target.closest("tr");
    const name = product.querySelector(".product-purchase-name").dataset.productName;
    const price = product.querySelector(".product-purchase-price").dataset.productPrice;
    const quantity = product.querySelector(".product-purchase-quantity").dataset.productQuantity;

    try {
      this.buy({ name, price, quantity });
    } catch (err) {
      alert(err);
    }
  };

  buy = ({ name, price, quantity }) => {
    this.model.spendMoney(Number(price), Number(quantity));
    this.product.model.buyProduct(name);
    this.updatePage();
  };

  updatePage = () => {
    const products = this.product.model.getProducts();
    this.view.renderChargedAmount(this.$chargeAmountContainer, this.model.getChargedMoney());
    this.view.renderPurchaseTable(this.$purchaseTableBody, products);
  };
}
