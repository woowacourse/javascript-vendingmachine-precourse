export default class VendingModel {
  constructor() {
    this._productObj = {};
    this._coinObj = { coin500: 0, coin100: 0, coin50: 0, coin10: 0 };
    this._chargedMoney = 0;
    this._insertedMoney = 0;
  }

  set productObj(obj) {
    this._productObj[obj.name] = { price: obj.price, quantity: obj.quantity };
  }

  get productObj() {
    return this._productObj;
  }

  set coinObj(obj) {
    this._coinObj[obj.name] = obj.quantity;
  }

  get coinObj() {
    return this._coinObj;
  }

  set chargedMoney(money) {
    this._chargedMoney = money;
  }

  get chargedMoney() {
    return this._chargedMoney;
  }

  set insertedMoney(money) {
    this._insertedMoney = money;
  }

  get insertedMoney() {
    return this._insertedMoney;
  }

  static setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static getLocalStorage(key) {
    return localStorage.getItem(key);
  }
}
