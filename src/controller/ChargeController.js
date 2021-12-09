export class ChargeController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;

    this.loadCharge();
    this.triggerEvent();
  }

  loadCharge() {
    const chargeAmount = this.model.chargeAmount;
    this.coreView.chargeView.showChargeAmount(chargeAmount);
  }

  triggerEvent() {
    this.coreView.chargeView.setOnChargeSubmit(this.onChargeSubmit.bind(this));
  }

  onChargeSubmit(chargeMoney) {
    const chargeAmount = this.model.addChargeMoney(chargeMoney);
    this.model.addCoin(chargeMoney);
    this.coreView.chargeView.showChargeAmount(chargeAmount);
  }
}
