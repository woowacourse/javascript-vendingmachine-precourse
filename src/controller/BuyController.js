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

  onBuyClick(productName, price) {
    let totalInsertedMoney = this.model.totalInsertedMoney;
    console.log(`productName`, productName);
    console.log(`price`, price);
    if (totalInsertedMoney < price) {
      return;
    }
    this.model.buyProduct(productName, price);
    totalInsertedMoney = this.model.totalInsertedMoney;
    const products = this.model.products;
    this.coreView.buyView.showTotalInsertedMoney(totalInsertedMoney);
    this.coreView.buyView.showProductForBuy(products);
  }
}
