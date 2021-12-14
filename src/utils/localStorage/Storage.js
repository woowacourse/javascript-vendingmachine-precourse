import { KEY, ZERO } from '../../constants.js';

function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
  let data = '';
  data = JSON.parse(localStorage.getItem(key));
  if (data) {
    return data;
  }
  return;
}

function removeData(key) {
  localStorage.removeItem(key);
}

function getProduct() {
  let product = getData(KEY.PRODUCT);
  if (product) {
    return product;
  }

  product = {
    name: '',
    price: 0,
    quantity: 0,
  };
  return product;
}

function getVendingMachineCoin() {
  let coin = getData(KEY.VENDING_MACHINE_COIN);
  if (coin) {
    return coin;
  }
  coin = {
    coin: 0,
    coin500: 0,
    coin100: 0,
    coin50: 0,
    coin10: 0,
  };
  return coin;
}

function getPurchaseCoin() {
  let coin = getData(KEY.PURCHASE_COIN);
  if (coin) {
    return coin;
  }
  coin = {
    productCoin: 0,
  };
  return coin;
}

export default class Storage {
  constructor() {
    this.product = getProduct();
    this.vendingMachinCoin = getVendingMachineCoin();
    this.purchaseCoin = getPurchaseCoin();
  }

  setProduct(data) {
    setData(KEY.PRODUCT, data);
    this.product = data;
  }

  setMachineCoin(data) {
    setData(KEY.VENDING_MACHINE_COIN, data);
    this.vendingMachinCoin = data;
  }

  setPurchaseCoin(data) {
    setData(KEY.PURCHASE_COIN, data);
    this.purchaseCoin = data;
  }

  updateProduct(addProduct) {
    const originProduct = this.product; // 가장 최근 작업이었던 것.
    if (originProduct == null) {
      this.setProduct(addProduct);
      return;
    }

    if (originProduct.quantity == 0) {
      removeData(KEY.PRODUCT);
    }

    this.setProduct(addProduct);
  }

  updateMachineCoin(addCoin) {
    this.setMachineCoin(addCoin);
  }

  updatePurchaseCoin(addCoin) {
    this.setPurchaseCoin(addCoin);
  }
}
