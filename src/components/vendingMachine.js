import { MACHINE } from '../constants/machine.js';
import { STORAGE_KEY } from '../constants/storageKey.js';
import { alertPurchaseErrorMessage, canPurchase } from './validator.js';

function VendingMachine() {
  this.products = [];
  this.charge = 0;
  this.coin = {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };
  this.insertMoney = 0;

  this.addProduct = (product) => {
    this.products.push(product);
    localStorage.setItem(STORAGE_KEY.PRODUCT, JSON.stringify(this.products));
  };

  this.addCharge = (charge) => {
    this.charge += charge;
    localStorage.setItem(STORAGE_KEY.CHARGE, JSON.stringify(this.charge));
  };

  this.addCoin = (charge) => {
    let amount = charge;

    while (amount >= 0) {
      const coin = MissionUtils.Random.pickNumberInList(COIN);

      if (coin <= amount) {
        this.coin[coin] += 1;
        amount -= coin;
      }

      if (!amount) {
        break;
      }
    }
    localStorage.setItem(STORAGE_KEY.COIN, JSON.stringify(this.coin));
  };

  this.addInsertMoney = (money) => {
    this.insertMoney += money;
    localStorage.setItem(STORAGE_KEY.INSERT, JSON.stringify(this.insertMoney));
  };

  this.purchaseProduct = (name) => {
    const product = this.products.find((product) => product.name === name);

    if (!canPurchase(product.price, this.insertMoney, product.quantity)) {
      alertPurchaseErrorMessage(
        product.price,
        this.insertMoney,
        product.quantity
      );

      return;
    }

    product.quantity -= 1;
    this.insertMoney -= product.price;
    localStorage.setItem(STORAGE_KEY.PRODUCT, JSON.stringify(this.products));
    localStorage.setItem(STORAGE_KEY.INSERT, JSON.stringify(this.insertMoney));
  };

  this.getReturnCoinCount = (coin) => {
    const minCount = Math.min(
      this.coin[coin],
      parseInt(this.insertMoney / coin)
    );

    this.coin[coin] -= minCount;
    this.insertMoney -= minCount * coin;
    this.charge -= minCount * coin;

    return minCount;
  };

  this.returnCoin = () => {
    const returnCoin = MACHINE.COIN.map((coin) =>
      this.getReturnCoinCount(coin)
    );

    localStorage.setItem(STORAGE_KEY.COIN, JSON.stringify(this.coin));
    localStorage.setItem(STORAGE_KEY.INSERT, JSON.stringify(this.insertMoney));
    localStorage.setItem(STORAGE_KEY.CHARGE, JSON.stringify(this.charge));

    return returnCoin;
  };
}

export const vendingMachine = new VendingMachine();
