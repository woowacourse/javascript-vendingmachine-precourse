export default class LocalStorageUtils {
  static keys = {
    productAdd: 'productAdd',
    machineMange: 'machineMange',
  };

  static getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getProductAddItem() {
    const data = this.getItem(this.keys.productAdd);
    return data ? data : [];
  }

  static setProductAddItem(value) {
    this.setItem(this.keys.productAdd, value);
  }

  static getMachineManageTableItem() {
    const emptyItem = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
    const data = this.getItem(this.keys.machineMange);
    return data ? data : emptyItem;
  }

  static setMachineManageTableItem(value) {
    this.setItem(this.keys.machineMange, value);
  }
}
