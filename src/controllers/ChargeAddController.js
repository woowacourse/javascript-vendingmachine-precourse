import ChargeAddModel from "../models/ChargeAddModel.js";

export default class ChargeAddController {
  constructor($app) {
    this.chargeModel = new ChargeAddModel();
    this.$app = $app;
    this.chargeAddField = document.createElement('div');
    this.addCoin;
    this.localTotalCharge;
    this.render();
    this.setEvent();
    this.setChargeCoin();
    this.renderCharge();
  }

  getChargeCoin() {
    this.chargeModel.setLocalCharge(this.addCoin);
    this.setChargeCoin();
  }

  setChargeCoin() {
    this.localTotalCharge = this.chargeModel.getLocalCharge();
  }

}