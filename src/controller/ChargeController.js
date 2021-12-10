export class ChargeController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;

    this.loadCharge();
    this.triggerEvent();
  }

  loadCharge() {
    const machineChargeAmount = this.model.machineChargeAmount;
    const coins = this.model.coins;
    this.coreView.chargeView.showChargeAmount(machineChargeAmount);
    this.coreView.chargeView.showCoins(coins);
  }

  triggerEvent() {
    this.coreView.chargeView.setOnChargeSubmit(this.onChargeSubmit.bind(this));
  }

  onChargeSubmit(chargeMoney) {
    const chargeAmount = this.model.addChargeMoney(chargeMoney);
    const coins = this.model.addCoin(chargeMoney);
    this.coreView.chargeView.showChargeAmount(chargeAmount);
    this.coreView.chargeView.showCoins(coins);
  }
}
