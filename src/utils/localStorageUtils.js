export default class LocalStorageUtils {
  static keys = {
    productAdd: 'productAdd',
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
}
