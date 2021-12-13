import { KEY } from '../../constants.js';

function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
  let data = '';
  data = JSON.parse(localStorage.getItem(key));

  return data;
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
  }

  setMachineCoin(data) {
    setData(KEY.VENDING_MACHINE_COIN, data);
  }

  setPurchaseCoin(data) {
    setData(KEY.PURCHASE_COIN, data);
  }
}
