import { ERROR_MESSAGE, NUMBER, COIN } from '../constants/constants.js';
import { getLocalStorage } from '../store.js';

function isNull(value) {
  return value !== '';
}

function checkProduct(newProduct) {
  const products = getLocalStorage('products') || [];
  return !products.find(product => product.name === newProduct.name);
}

function checkPrice(price) {
  return price < COIN.NUMBER.COIN_100 ? false : price % COIN.NUMBER.COIN_10 === NUMBER.ZERO;
}

function checkQuantity(quantity) {
  return quantity <= NUMBER.ZERO ? false : Number.isInteger(quantity);
}

function checkCharge(charge) {
  return charge <= NUMBER.ZERO ? false : charge % COIN.NUMBER.COIN_10 === NUMBER.ZERO;
}

export function validateProductInput(productObject) {
  if (!Object.keys(productObject).every(key => isNull(productObject[key]))) {
    return alert(ERROR_MESSAGE.NULL);
  }
  if (!checkProduct(productObject)) {
    return alert(ERROR_MESSAGE.DUPLICATE);
  }
  if (!checkPrice(Number(productObject.price))) {
    return alert(ERROR_MESSAGE.PRICE);
  }
  if (!checkQuantity(Number(productObject.quantity))) {
    return alert(ERROR_MESSAGE.QUANTITY);
  }
  return true;
}

export function validateChangeInput(chargeValue) {
  if (!isNull(chargeValue)) {
    return alert(ERROR_MESSAGE.NULL);
  }
  if (!checkCharge(Number(chargeValue))) {
    return alert(ERROR_MESSAGE.CHARGE);
  }
  return true;
}
