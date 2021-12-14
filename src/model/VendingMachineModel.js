import { BLANK_COIN_OBJECT, COIN_LIST, EXCEPTION_ALERT } from '../utils/constant.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

export class VendingMachineModel {
  products = getLocalStorage('products', []);
  machineCoins = getLocalStorage('machineCoins', BLANK_COIN_OBJECT);

  machineChargeAmount = Number(getLocalStorage('machineCharge', 0));
  totalInsertedMoney = Number(getLocalStorage('totalInsertedMoney', 0));
  changeCoins = getLocalStorage('changeCoins', BLANK_COIN_OBJECT);

  addProduct(productName, price, quantity) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].productName !== productName) {
        continue;
      }
      if (this.products[i].price !== price) {
        alert(EXCEPTION_ALERT.differentPriceError);
        return;
      }
      this.addExistingProduct(i, quantity);
      return this.products;
    }
    this.addNewProduct(productName, price, quantity);
    return this.products;
  }

  addExistingProduct(index, quantity) {
    this.products[index].quantity += quantity;
    setLocalStorage('products', this.products);
  }

  addNewProduct(productName, price, quantity) {
    this.products = [...this.products, { productName, price, quantity }];
    setLocalStorage('products', this.products);
  }

  addChargeMoney(chargeMoney) {
    this.machineChargeAmount += chargeMoney;
    setLocalStorage('machineCharge', this.machineCharge);
    return this.machineChargeAmount;
  }

  addMachineCoins(chargeMoney) {
    while (chargeMoney > 0) {
      const randomCoin = MissionUtils.Random.pickNumberInList(COIN_LIST);
      if (this.isEnoughMoneyForCoin(chargeMoney, randomCoin)) {
        chargeMoney -= randomCoin;
        this.machineCoins[randomCoin]++;
      }
    }
    setLocalStorage('machineCoins', this.machineCoins);
    return this.machineCoins;
  }

  isEnoughMoneyForCoin(chargeMoney, randomCoin) {
    return chargeMoney - randomCoin >= 0;
  }

  buyProduct(productName, price) {
    this.addInsertedMoney(Number(`-${price}`));
    this.minusQuantity(productName);
  }

  minusQuantity(productName) {
    this.products.some((product, index) => {
      if (product.productName !== productName) {
        return false;
      }
      this.minusQuantityByCondition(product, index);
      setLocalStorage('products', this.products);
      return true;
    });
  }

  minusQuantityByCondition(product, index) {
    if (Number(product.quantity) === 1) {
      this.products.splice(index, 1);
      return;
    }
    product.quantity--;
  }

  addInsertedMoney(insertedMoney) {
    this.totalInsertedMoney += insertedMoney;
    setLocalStorage('totalInsertedMoney', this.totalInsertedMoney);
    return this.totalInsertedMoney;
  }

  returnCoin() {
    this.returnCoinByCondition();
    this.storageUpdateWhenReturnCoin();
    return this.changeCoins;
  }

  isEnoughCoins() {
    return this.totalInsertedMoney <= this.machineChargeAmount;
  }

  returnCoinByCondition() {
    if (!this.isEnoughCoins()) {
      this.returnAllMachineCoin();
      return;
    }
    this.returnTotalInsertedMoney();
  }

  returnAllMachineCoin() {
    this.totalInsertedMoney -= this.machineChargeAmount;
    this.machineChargeAmount = 0;
    for (let coin of COIN_LIST) {
      this.changeCoins[coin] += this.machineCoins[coin];
      this.machineCoins[coin] = 0;
    }
  }

  returnTotalInsertedMoney() {
    this.machineChargeAmount -= this.totalInsertedMoney;
    COIN_LIST.some((coin) => {
      const coinCount = this.calculateCoinCount(coin);
      this.returnSomeCoin(coin, coinCount);
      if (this.totalInsertedMoney === 0) {
        return true;
      }
    });
  }

  calculateCoinCount(coin) {
    let coinCount = parseInt(this.totalInsertedMoney / coin);
    if (this.machineCoins[coin] < coinCount) {
      coinCount = this.machineCoins[coin];
    }
    return coinCount;
  }

  returnSomeCoin(coin, count) {
    this.totalInsertedMoney -= coin * count;
    this.machineCoins[coin] -= count;
    this.changeCoins[coin] += count;
  }

  storageUpdateWhenReturnCoin() {
    setLocalStorage('totalInsertedMoney', this.totalInsertedMoney);
    setLocalStorage('machineCharge', this.machineCharge);
    setLocalStorage('machineCoins', this.machineCoins);
    setLocalStorage('changeCoins', this.changeCoins);
  }
}
