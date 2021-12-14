import { KEY } from '../../constants.js';

function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
  let data = '';
  data = JSON.parse(localStorage.getItem(key));

  return data;
}

function removeData(key) {
  localStorage.removeItem(key);
}

function getProduct() {
  const product = getData(KEY.PRODUCT);
  return product;
}

function getVendingMachineCoin() {
  const coin = getData(KEY.VENDING_MACHINE_COIN);
  return coin;
}

function getPurchaseCoin() {
  const coin = getData(KEY.PURCHASE_COIN);
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

    console.log(originProduct);
    console.log(addProduct);
    if (originProduct.name == addProduct.name) {
      removeData(KEY.PRODUCT);
    }

    this.setProduct(addProduct);
  }

  updateMachineCoin(addCoin) {
    const originCoin = this.vendingMachinCoin;

    console.log(originCoin);
    console.log(addCoin);

    this.setMachineCoin(addCoin);
  }

  updatePurchaseCoin(addCoin) {
    const originCoin = this.purchaseCoin;

    console.log(originCoin);
    console.log(addCoin);

    this.setPurchaseCoin(addCoin);
  }
}
