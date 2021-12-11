import { coinList } from '../utils/constant.js';

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
    this.products = [...this.products, { productName, price, quantity }];
    localStorage.setItem('products', JSON.stringify(this.products));
    return this.products;
  }

  buyProduct(productName, price) {
    this.addInsertedMoney(Number(`-${price}`));
    this.minusQuantity(productName);
  }

  minusQuantity(productName) {
    this.products.some((product, index) => {
      if (product.productName === productName) {
        if (Number(product.quantity) === 1) {
          this.products.splice(index, 1);
        }
        product.quantity--;
        localStorage.setItem('products', JSON.stringify(this.products));
        return true;
      }
    });
  }

  addChargeMoney(chargeMoney) {
    this.machineChargeAmount += chargeMoney;
    localStorage.setItem('machineCharge', JSON.stringify(this.machineChargeAmount));
    return this.machineChargeAmount;
  }

  addInsertedMoney(insertedMoney) {
    this.totalInsertedMoney += insertedMoney;
    localStorage.setItem('totalInsertedMoney', JSON.stringify(this.totalInsertedMoney));
    return this.totalInsertedMoney;
  }

  addMachineCoins(chargeMoney) {
    while (chargeMoney > 0) {
      const randomCoin = MissionUtils.Random.pickNumberInList(coinList);
      if (chargeMoney - randomCoin >= 0) {
        chargeMoney -= randomCoin;
        this.machineCoins[randomCoin]++;
      }
    }
    localStorage.setItem('machineCoins', JSON.stringify(this.machineCoins));
    return this.machineCoins;
  }

  returnCoin() {
    if (this.totalInsertedMoney > this.machineChargeAmount) {
      this.totalInsertedMoney -= this.machineChargeAmount;
      this.machineChargeAmount = 0;
      for (let coin in this.changeCoins) {
        this.machineCoins[coin] = 0;
      }
      this.changeCoins = { ...this.machineCoins };
      this.storageUpdateWhenReturnCoin();
      return this.changeCoins;
    }
    this.machineChargeAmount -= this.totalInsertedMoney;
    coinList.some((coin) => {
      let count = parseInt(this.totalInsertedMoney / coin);
      if (this.machineCoins[coin] < count) {
        count = this.machineCoins[coin];
      }
      this.totalInsertedMoney -= coin * count;
      this.machineCoins[coin] -= count;
      this.changeCoins[coin] += count;
      if (this.totalInsertedMoney === 0) {
        return true;
      }
    });
    this.storageUpdateWhenReturnCoin();
    return this.changeCoins;
  }

  storageUpdateWhenReturnCoin() {
    localStorage.setItem('totalInsertedMoney', JSON.stringify(this.totalInsertedMoney));
    localStorage.setItem('machineCharge', JSON.stringify(this.machineChargeAmount));
    localStorage.setItem('machineCoins', JSON.stringify(this.machineCoins));
    localStorage.setItem('changeCoins', JSON.stringify(this.changeCoins));
  }
}
