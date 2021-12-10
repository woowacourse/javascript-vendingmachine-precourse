export class BuyController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;

    this.loadLocalStorage();
    this.triggerEvent();
  }

  loadLocalStorage() {
    const totalInsertedMoney = this.model.totalInsertedMoney;
    const products = this.model.products;
    this.coreView.buyView.showTotalInsertedMoney(totalInsertedMoney);
    if (products.length === 0) {
      return;
    }
    this.coreView.buyView.showProductForBuy(products);
  }

  triggerEvent() {
    this.coreView.buyView.setOnMoneySubmit(this.onMoneySubmit.bind(this));
    this.coreView.buyView.setOnBuyClick(this.onBuyClick.bind(this));
  }

  onMoneySubmit(insertedMoney) {
    const totalInsertedMoney = this.model.addInsertedMoney(insertedMoney);
    this.coreView.buyView.showTotalInsertedMoney(totalInsertedMoney);
  }

  onBuyClick(productName, price, quantity) {
    let totalInsertedMoney = this.model.totalInsertedMoney;
    console.log(`productName`, productName);
    console.log(`price`, price);
    console.log(`quantity`, quantity);
    if (totalInsertedMoney < price) {
      return;
    }
    totalInsertedMoney = this.model.addInsertedMoney(Number(`-${price}`));
    this.coreView.buyView.showTotalInsertedMoney(totalInsertedMoney);
    // 투입금액이 가격보다 크면, 1. 투입금액을 감소시키고, 2. 수량을 감소시킨다.
  }
}
