export default class VendingModel {
  constructor() {
    this._productObj = {};
    this._coinObj = {};
    this._insertedMoney = 0;
    this._changesObj = {};
  }

  set productObj(obj) {
    this._productObj[obj.name] = { price: obj.price, quantity: obj.quantity };
  }

  get productObj() {
    return this._productObj;
  }

  set coinObj(newCoinObj) {
    this._coinObj = newCoinObj;
  }

  get coinObj() {
    return this._coinObj;
  }

  set insertedMoney(newInsertedMoney) {
    this._insertedMoney = newInsertedMoney;
  }

  get insertedMoney() {
    return this._insertedMoney;
  }

  set changesObj(newChangesObj) {
    this._changesObj = newChangesObj;
  }

  get changesObj() {
    return this._changesObj;
  }

  static setLocalStorage(key, data) {
    localStorage.setItem(key, data);
  }

  static getLocalStorage(key) {
    return localStorage.getItem(key);
  }
}
