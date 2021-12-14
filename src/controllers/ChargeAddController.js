import ChargeAddModel from "../models/ChargeAddModel.js";

export default class ChargeAddController {
  constructor($app) {
    this.chargeModel = new ChargeAddModel();
    this.$app = $app;
    this.chargeAddField = document.createElement('div');
    this.validAddCoin;
    this.localTotalCharge;
    this.localRandomCoin;
    this.render();
    this.setEvent();
    this.setChargeCoin();
    this.renderCharge();
    this.setRandomCoin();
    this.renderRandomCoin();
  }

  renderChargeAdd () {
    this.chargeAddField.style = ("display: block");
    this.setChargeCoin();
    this.setRandomCoin()
    this.renderCharge();
    this.renderRandomCoin();
  }

  getChargeCoin() {
    this.chargeModel.setLocalCharge(this.validAddCoin);
    this.setChargeCoin();
    this.setRandomCoin();
  }

  setChargeCoin() {
    this.localTotalCharge = this.chargeModel.getLocalCharge();
  }

  setRandomCoin() {
    this.localRandomCoin = this.chargeModel.getRandonCoin();
    this.containRandomCoin && this.renderRandomCoin();
  }

}