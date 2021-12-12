export default class Store {
  constructor() {
    this.storage = window.localStorage;
    this.checkProductList();
    this.checkChangeList();
  }

  checkProductList() {
    const productList = this.storage.getItem('productList');
    if (!productList) this.storage.setItem('productList', JSON.stringify([]));
  }

  addProduct(product) {
    const productList = this.storage.getItem('productList');
    const arr = JSON.parse(productList);
    arr.push(product);
    this.storage.setItem('productList', JSON.stringify(arr));
  }

  getProductList() {
    return JSON.parse(this.storage.getItem('productList'));
  }

  checkChangeList() {
    const changeList = this.storage.getItem('changeList');
    const initialChangeList = {
      total: 0,
      coins: {
        500: 0,
        100: 0,
        50: 0,
        10: 0,
      },
    };
    if (!changeList)
      this.storage.setItem('changeList', JSON.stringify(initialChangeList));
  }

  chargeChanges(changeList) {
    const originalChangeList = JSON.parse(this.storage.getItem('changeList'));
    originalChangeList.total =
      Number(originalChangeList.total) + Number(changeList.total);
    originalChangeList.coins['500'] += changeList.coins['500'];
    originalChangeList.coins['100'] += changeList.coins['100'];
    originalChangeList.coins['50'] += changeList.coins['50'];
    originalChangeList.coins['10'] += changeList.coins['10'];

    this.storage.setItem('changeList', JSON.stringify(originalChangeList));
  }

  getCurrentChanges() {
    return JSON.parse(this.storage.getItem('changeList'));
  }
}
