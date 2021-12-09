import CoinStorageModel from "./coinStorageModel.js";
import CoinStorageView from "./coinStorageView.js";

export default class CoinStorageController {
  constructor() {
    this.model = new CoinStorageModel();
    this.view = new CoinStorageView();
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.view.renderInputForm(this.$container);
    this.initDOMS();
    this.setEvent();
  };

  initDOMS = () => {
    this.$coinChargeInput = document.getElementById(
      "vending-machine-charge-input"
    );
    this.$coinChargeButton = document.getElementById(
      "vending-machine-charge-button"
    );
  };

  setEvent = () => {
    this.$coinChargeButton.addEventListener("click", this.setCoinChargeEvent);
  };

  setCoinChargeEvent = () => {
    const money = Number(this.$coinChargeInput.value);
    this.model.addMoney(money);
    console.log(this.model.coins, this.model.totalMoney);
  };
}
