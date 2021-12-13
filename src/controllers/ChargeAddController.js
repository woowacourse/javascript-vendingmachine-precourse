import ChargeAddModel from "../models/ChargeAddModel.js";

export default class ChargeAddController {
  constructor($app) {
    this.chargeModel = new ChargeAddModel();
    this.$app = $app;
    this.chargeAddField = document.createElement('div');
    this.addCoin;
    this.localTotalCharge;
    this.containRandomCoin;
    this.render();
    this.setEvent();
    this.setChargeCoin();
    this.renderCharge();
    this.setRandomCoin();
  }

  getChargeCoin() {
    this.chargeModel.setLocalCharge(this.addCoin);
    this.setChargeCoin();
    this.setRandomCoin();
  }

  setChargeCoin() {
    this.localTotalCharge = this.chargeModel.getLocalCharge();
  }

  setRandomCoin() {
    this.containRandomCoin = this.chargeModel.getRandonCoin();
    console.log(this.containRandomCoin)
    this.containRandomCoin && this.renderRandomCoin();
  }

}