export class BuyController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;

    this.triggerEvent();
  }

  triggerEvent() {
    this.coreView.buyView.setOnMoneySubmit(this.onMoneySubmit.bind(this));
  }

  onMoneySubmit(insertedMoney) {
    const totalInsertedMoney = this.model.addInsertedMoney(insertedMoney);
    this.coreView.buyView.showTotalInsertedMoney(totalInsertedMoney);
  }
}
