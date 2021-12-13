import { EXCEPTION_ALERT } from '../utils/constant.js';
import { isMoneyValid } from '../utils/validator.js';

export class BuyController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;
  }

  loadLocalStorage() {
    const totalInsertedMoney = this.model.totalInsertedMoney;
    const products = this.model.products;
    const changeCoins = this.model.changeCoins;
    this.coreView.buyView.showTotalInsertedMoney(totalInsertedMoney);
    this.coreView.buyView.showChangeCoin(changeCoins);
    if (products.length === 0) {
      return;
    }
    this.coreView.buyView.showProductForBuy(products);
  }

  triggerEvent() {
    this.coreView.buyView.setOnMoneySubmit(this.onMoneySubmit.bind(this));
    this.coreView.buyView.setOnBuyClick(this.onBuyClick.bind(this));
    this.coreView.buyView.setOnCoinReturnClick(this.onCoinReturnClick.bind(this));
  }

  onMoneySubmit(insertedMoney) {
    if (!isMoneyValid(insertedMoney)) {
      return;
    }
    const totalInsertedMoney = this.model.addInsertedMoney(insertedMoney);
    this.coreView.buyView.showTotalInsertedMoney(totalInsertedMoney);
  }

  onBuyClick(productName, price) {
    let totalInsertedMoney = this.model.totalInsertedMoney;
    if (totalInsertedMoney < price) {
      alert(EXCEPTION_ALERT.notEnoughMoneyError);
      return;
    }
    this.model.buyProduct(productName, price);
    totalInsertedMoney = this.model.totalInsertedMoney;
    const products = this.model.products;
    this.coreView.buyView.showTotalInsertedMoney(totalInsertedMoney);
    this.coreView.buyView.showProductForBuy(products);
  }

  onCoinReturnClick() {
    const changeCoin = this.model.returnCoin();
    const totalInsertedMoney = this.model.totalInsertedMoney;
    this.coreView.buyView.showChangeCoin(changeCoin);
    this.coreView.buyView.showTotalInsertedMoney(totalInsertedMoney);
  }
}
