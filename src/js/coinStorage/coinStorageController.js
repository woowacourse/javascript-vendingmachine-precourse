import CoinStorageModel from "./CoinStorageModel.js";
import CoinStorageView from "./CoinStorageView.js";
import { ID } from "../util/constant.js";

export default class CoinStorageController {
  constructor() {
    this.model = new CoinStorageModel();
    this.view = new CoinStorageView();
    this.$container = document.getElementById(ID.APP);
  }

  init = () => {
    this.view.renderPage(this.$container);
    this.initDOMS();
    this.setEvent();
    this.updatePage();
  };

  initDOMS = () => {
    this.$coinChargeInput = document.getElementById(ID.VENDING_MACHINE_CHARGE_INPUT);
    this.$coinChargeButton = document.getElementById(ID.VENDING_MACHINE_CHARGE_BUTTON);
    this.$chargedAmount = document.getElementById(ID.VENDING_MACHINE_CHARGE_AMOUNT);
  };

  setEvent = () => {
    this.$coinChargeButton.addEventListener("click", this.setCoinChargeEvent);
  };

  setCoinChargeEvent = () => {
    const money = Number(this.$coinChargeInput.value);

    try {
      this.model.addMoney(money);
      this.updatePage();
    } catch (err) {
      alert(err);
    }
  };

  return = (money) => {
    const returnedCoins = this.model.returnChanges(money);
    this.view.renderReturnedCoinAmount(returnedCoins);
  };

  updatePage = () => {
    this.view.renderTotalMoney(this.$chargedAmount, this.model.getTotalMoney());
    this.view.renderCoinAmount(this.model.getCoins());
  };
}
