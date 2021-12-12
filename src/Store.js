export default class Store {
  constructor() {
    this.storage = window.localStorage;
    this.checkProductList();
  }

  checkProductList() {
    const productList = this.storage.getItem('productList');
    if (!productList) this.storage.setItem('productList', JSON.stringify([]));
  }

  addProduct(product) {
    const productList = this.storage.getItem('productList');
    const arr = JSON.parse(productList)
    arr.push(product);
    this.storage.setItem('productList', JSON.stringify(arr))
  }

  getProductList() {
    return JSON.parse(this.storage.getItem('productList'));
  }
}