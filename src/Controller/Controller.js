import {
  getMoneySum,
  checkEmpty,
  checkInteger,
  checkOverHundred,
  checkTenTimes,
  checkOverZero,
  checkUnderZero,
  getIndex,
  getValue,
} from "./common.js";
import { ERROR } from "../constant/textConstant.js";

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.bindProductChange(this.onProductChange);
    this.model.bindCoinChange(this.onCoinChange);
    this.model.bindMoneyChange(this.onMoneyChange);
    this.view.bindProductAdd(this.productAddHandler);
    this.view.bindChargeCoin(this.chargeCoinHandler);
    this.view.bindMoneyAdd(this.moneyAddHandler);
    this.view.bindPurchaseProduct(this.purchaseProductHandler);
    this.view.bindReturnCoin(this.returnCoinHandler);
    this.view.displayProductAdd(this.model.product);
    this.view.displayChargeCoin(this.model.coin);
    this.view.displayProductPurchase(this.model.product, this.model.money);
  }

  onProductChange = (product) => {
    this.view.displayProductAddChange(product);
    this.view.displayAvailableProduct(product);
  };

  onCoinChange = (coin) => {
    this.view.displayChargeCoinChange(coin, getMoneySum(coin));
  };

  onMoneyChange = (money) => {
    this.view.displayMoneyChange(money);
  };

  productAddHandler = (name, price, quantity) => {
    let flag = true;
    if (!checkEmpty(name)) {
      alert(ERROR.LENGTH_OVER_ONE);
      flag = false;
    }
    if (
      !checkInteger(price) ||
      !checkOverHundred(price) ||
      !checkTenTimes(price)
    ) {
      alert(ERROR.OVER100_DIV10);
      flag = false;
    }

    if (!checkInteger(quantity) || !checkOverZero(quantity)) {
      alert(ERROR.OVER_ONE);
      flag = false;
    }

    if (flag) this.model.addProduct(name, price, quantity);
  };

  chargeCoinHandler = (chargeMoney) => {
    if (
      !checkInteger(chargeMoney) ||
      !checkUnderZero(chargeMoney) ||
      !checkTenTimes(chargeMoney)
    ) {
      alert(ERROR.OVER10_DIV10);
    } else {
      this.makeMoneyCoin(+chargeMoney);
    }
  };

  makeMoneyCoin = (money) => {
    const coins = this.model.coin;
    let sum = 0;
    while (sum !== money) {
      const randomCoin = MissionUtils.Random.pickNumberInList([
        500, 100, 50, 10,
      ]);
      if (sum + randomCoin <= money) {
        sum += randomCoin;
        coins[getIndex(randomCoin)] += 1;
      }
    }
    this.model.addCoin(coins);
  };

  moneyAddHandler = (money) => {
    if (
      !checkInteger(money) ||
      !checkUnderZero(money) ||
      !checkTenTimes(money)
    ) {
      alert(ERROR.OVER10_DIV10);
    } else {
      this.model.addMoney(+money);
      return this.model.money;
    }
  };

  purchaseProductHandler = (item) => {
    this.model.product.forEach((product, index) => {
      if (product.name === item.productName) {
        if (this.model.money >= product.price) {
          this.model.submitProduct(index);
          this.model.submitMoney(product.price);
        } else {
          alert(ERROR.NOT_ENOUGH_MONEY);
        }
      }
    });
  };

  returnCoinHandler = () => {
    let sum = 0;
    const returnCoin = [0, 0, 0, 0];
    this.model.coin.forEach((coinCount, index) => {
      while (
        sum + getValue(index) <= this.model.money &&
        coinCount > returnCoin[index]
      ) {
        sum += getValue(index);
        returnCoin[index] += 1;
      }
    });

    this.model.submitMoney(sum);
    this.model.submitCoin(returnCoin);
    this.view.displayReturnCoin(returnCoin);
  };
}
