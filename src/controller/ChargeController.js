export class ChargeController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;

    this.triggerEvent();
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
