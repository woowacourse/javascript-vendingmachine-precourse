import PurchaseModel from "./purchaseModel.js";
import PurchaseView from "./purchaseView.js";

export default class PurchaseController {
  constructor(product) {
    this.model = new PurchaseModel();
    this.view = new PurchaseView();
    this.product = product;
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.view.renderPage(this.$container);
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

    const product = target.closest("tr").getElementsByClassName("product-purchase-price")[0];
    const price = Number(product.dataset.productPrice);

    this.model.spendMoney(price);
    this.updatePage();
  };

  updatePage = () => {
    const products = this.product.model.getProducts();
    this.view.renderChargedAmount(this.$chargeAmountContainer, this.model.getChargedMoney());
    this.view.renderPurchaseTable(this.$purchaseTableBody, products);
  };
}
