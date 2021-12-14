import { coinList, EXCEPTION_ALERT } from '../utils/constant.js';

export class VendingMachineModel {
  products = JSON.parse(localStorage.getItem('products')) || [];
  machineCoins = JSON.parse(localStorage.getItem('machineCoins')) || {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };
  machineChargeAmount = Number(JSON.parse(localStorage.getItem('machineCharge'))) || 0;
  totalInsertedMoney = Number(JSON.parse(localStorage.getItem('totalInsertedMoney'))) || 0;
  changeCoins = JSON.parse(localStorage.getItem('changeCoins')) || {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };

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
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  addNewProduct(productName, price, quantity) {
    this.products = [...this.products, { productName, price, quantity }];
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  addChargeMoney(chargeMoney) {
    this.machineChargeAmount += chargeMoney;
    localStorage.setItem('machineCharge', JSON.stringify(this.machineChargeAmount));
    return this.machineChargeAmount;
  }

  addMachineCoins(chargeMoney) {
    while (chargeMoney > 0) {
      const randomCoin = MissionUtils.Random.pickNumberInList(coinList);
      if (this.isEnoughMoneyForCoin(chargeMoney, randomCoin)) {
        chargeMoney -= randomCoin;
        this.machineCoins[randomCoin]++;
      }
    }
    localStorage.setItem('machineCoins', JSON.stringify(this.machineCoins));
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
      if (Number(product.quantity) === 1) {
        this.products.splice(index, 1);
      } else {
        product.quantity--;
      }
      localStorage.setItem('products', JSON.stringify(this.products));
      return true;
    });
  }

  addInsertedMoney(insertedMoney) {
    this.totalInsertedMoney += insertedMoney;
    localStorage.setItem('totalInsertedMoney', JSON.stringify(this.totalInsertedMoney));
    return this.totalInsertedMoney;
  }

  returnCoin() {
    if (!this.isEnoughCoins()) {
      this.returnAllMachineCoin();
    } else {
      this.returnTotalInsertedMoney();
    }
    this.storageUpdateWhenReturnCoin();
    return this.changeCoins;
  }

  isEnoughCoins() {
    return this.totalInsertedMoney <= this.machineChargeAmount;
  }

  returnAllMachineCoin() {
    this.totalInsertedMoney -= this.machineChargeAmount;
    this.machineChargeAmount = 0;
    for (let coin in this.changeCoins) {
      this.changeCoins[coin] += this.machineCoins[coin];
      this.machineCoins[coin] = 0;
    }
  }

  returnTotalInsertedMoney() {
    this.machineChargeAmount -= this.totalInsertedMoney;
    coinList.some((coin) => {
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
    localStorage.setItem('totalInsertedMoney', JSON.stringify(this.totalInsertedMoney));
    localStorage.setItem('machineCharge', JSON.stringify(this.machineChargeAmount));
    localStorage.setItem('machineCoins', JSON.stringify(this.machineCoins));
    localStorage.setItem('changeCoins', JSON.stringify(this.changeCoins));
  }
}
