import PurchaseModel from "./purchaseModel.js";
import PurchaseView from "./purchaseView.js";

export default class PurchaseController {
  constructor() {
    this.model = new PurchaseModel();
    this.view = new PurchaseView();
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.view.renderPage(this.$container);
    this.initDOMS();
    this.setEvent();
  };

  initDOMS = () => {
    this.$chargeInput = document.getElementById("charge-input");
    this.$chargeButton = document.getElementById("charge-button");
    this.$chargeAmountContainer = document.getElementById("charge-amount");
  };

  setEvent = () => {
    this.$chargeButton.addEventListener("click", this.setClickChargeButtonEvent);
  };

  setClickChargeButtonEvent = () => {
    const money = Number(this.$chargeInput.value);

    try {
      this.model.chargeMoney(money);
      this.view.renderChargedAmount(this.$chargeAmountContainer, this.model.getchargedMoney());
    } catch (err) {
      alert(err);
    }
  };
}
