export default class Store {
  constructor() {
    this.storage = window.localStorage;
    this.checkProductList();
    this.checkChangeList();
    this.checkPuttedMoney();
  }

  checkProductList() {
    const productList = this.storage.getItem('productList');
    if (!productList) this.storage.setItem('productList', JSON.stringify([]));
  }

  addProduct(product) {
    const productListOfJson = this.storage.getItem('productList');
    const productList = JSON.parse(productListOfJson);
    productList.push(product);
    this.storage.setItem('productList', JSON.stringify(productList));
  }

  getProductList() {
    return JSON.parse(this.storage.getItem('productList'));
  }

  checkChangeList() {
    const changeList = this.storage.getItem('changeList');
    const initialChangeList = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
    if (!changeList)
      this.storage.setItem('changeList', JSON.stringify(initialChangeList));
  }

  getChangeListTotal() {
    const changeList = this.getCurrentChanges();
    const foo500 = changeList['500'] * 500;
    const foo100 = changeList['100'] * 100;
    const foo50 = changeList['50'] * 50;
    const foo10 = changeList['10'] * 10;
    return foo500 + foo100 + foo50 + foo10
  }

  chargeChanges(changeList) {
    const originalChangeList = this.getCurrentChanges();
    
    originalChangeList['500'] += parseInt(changeList['500']);
    originalChangeList['100'] += parseInt(changeList['100']);
    originalChangeList['50'] += parseInt(changeList['50']);
    originalChangeList['10'] += parseInt(changeList['10']);

    this.storage.setItem('changeList', JSON.stringify(originalChangeList));
  }

  getCurrentChanges() {
    return JSON.parse(this.storage.getItem('changeList'));
  }

  checkPuttedMoney() {
    const puttedMoney = this.storage.getItem('puttedMoney');
    const initialPuttedMoney = {
      inputMoney: 0,
      returnedCoins: {
        500: 0,
        100: 0,
        50: 0,
        10: 0,
      },
    };
    if (!puttedMoney)
      this.storage.setItem('puttedMoney', JSON.stringify(initialPuttedMoney));
  }

  getPuttedMoney() {
    return JSON.parse(this.storage.getItem('puttedMoney'));
  }

  substractProductQuantity({ name }) {
    const productList = this.getProductList();
    const index = productList.findIndex((product) => product.name === name);
    productList[index].quantity -= 1;
    this.storage.setItem('productList', JSON.stringify(productList));
  }

  addPuttedMoney(money) {
    const puttedMoney = this.getPuttedMoney();
    puttedMoney.inputMoney = parseInt(puttedMoney.inputMoney) + money;
    this.storage.setItem('puttedMoney', JSON.stringify(puttedMoney));
  }

  substractPuttedMoney(money) {
    const puttedMoney = this.getPuttedMoney();
    puttedMoney.inputMoney = parseInt(puttedMoney.inputMoney) - money;
    this.storage.setItem('puttedMoney', JSON.stringify(puttedMoney));
  }

  returnExchanges(currentCharges, puttedMoney) {
    const coinKeys = Object.keys(currentCharges);

    let index = coinKeys.length - 1;

    while (puttedMoney.inputMoney !== 0) {
      if (index < 0) break;
      if (!currentCharges[coinKeys[index]]) {
        index -= 1;
        continue;
      }
      if (puttedMoney.inputMoney - coinKeys[index] >= 0) {
        puttedMoney.inputMoney -= coinKeys[index];
        currentCharges[coinKeys[index]] -= 1;
        puttedMoney.returnedCoins[coinKeys[index]] += 1;
      }
    }
    this.storage.setItem('puttedMoney', JSON.stringify(puttedMoney));
    this.storage.setItem('changeList', JSON.stringify(currentCharges));
  }  
}
