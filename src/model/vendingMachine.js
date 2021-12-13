import {
  setOwnChange,
  getOwnChange,
  setUserMoney,
  getUserMoney,
} from "../storage/localStorage.js";
import { COIN } from "../utils/constants.js";

export default class VendingMachine {
  constructor() {
    this.productList = [];
    this.ownChange = getOwnChange();
    this.userMoney = getUserMoney();
    this.returnMoney = new Array(COIN.length).fill(0);
  }

  addProduct(name, price, quantity) {
    const isInclude = this.productList.some((product) => product.name === name);
    if (!isInclude) {
      this.productList.push({ name, price, quantity });
      return;
    }
    this.productList.map((product) => {
      if (product.name === name) {
        product.price = price;
        product.quantity += quantity;
        return false;
      }
    });
  }

  makeRandomChange(charged) {
    let zero = charged;

    COIN.map((coin, idx) => {
      if (zero / coin > 0) {
        const randomQuantity = MissionUtils.Random.pickNumberInRange(
          0,
          parseInt(zero / coin, 10)
        );
        zero -= randomQuantity * coin;
        this.ownChange[idx] += randomQuantity;
      }
    });
    this.ownChange[COIN.length - 1] += zero / 10;
    setOwnChange(this.ownChange);
  }

  getMoney(money) {
    this.userMoney += money;
    setUserMoney(this.userMoney);
  }

  returnChange() {
    let zero = this.userMoney;
    this.ownChange.map((el, idx) => {
      const canUse = Math.min(el, parseInt(zero / COIN[idx], 10));
      this.ownChange[idx] -= canUse;
      this.returnMoney[idx] = canUse;
      zero -= canUse * COIN[idx];
    });
    this.userMoney = zero;
    setOwnChange(this.ownChange);
    getOwnChange(this.ownChange);
    setUserMoney(this.userMoney);
    getUserMoney(this.userMoney);
  }

  buyProduct(name) {
    let isAvailable = false;
    this.productList.map((product) => {
      if (
        product.name === name &&
        product.price <= this.userMoney &&
        product.quantity >= 1
      ) {
        product.quantity -= 1;
        this.userMoney -= product.price;
        setUserMoney(this.userMoney);
        isAvailable = true;
        return false;
      }
    });

    return isAvailable;
  }
}
