import { getFromStorage, removeFromStorage, setInStorage } from '../store.js';
import { getReturnCoins, noChange } from '../utils/generalUtils.js';
import { hasEnoughInsert, isValidMoney } from '../validation.js';
import {
  ERROR_INVALID_INSERT,
  ERROR_INVALID_PURCHASE_PRICE,
} from './constants.js';

export const registerInsert = function addInsertValueToLocalStorage(value) {
  if (isValidMoney(value)) {
    const current = getFromStorage('insert');
    setInStorage('insert', current * 1 + value);
    return true;
  }

  alert(ERROR_INVALID_INSERT);
  return false;
};

export const getTotalAmount = function getTotalInsertFromLocalStorage() {
  return getFromStorage('insert') || 0;
};

const setPurchaseResult = function setPurchaseResultToLocalStorage(
  products,
  insert,
  dataset,
) {
  setInStorage('insert', insert - products[dataset.productName].price);
  const newProducts = { ...products };
  if (newProducts[dataset.productName].quantity === 1) {
    delete newProducts[dataset.productName];
  } else {
    newProducts[dataset.productName].quantity -= 1;
  }
  setInStorage('products', newProducts);
};

export const registerPurchase = function registerPurchaseToLocalStorage(
  dataset,
) {
  const insert = getFromStorage('insert') * 1;
  if (hasEnoughInsert(dataset.productPrice, insert)) {
    setPurchaseResult(getFromStorage('products'), insert, dataset);
    return true;
  }

  alert(ERROR_INVALID_PURCHASE_PRICE);
  return false;
};

export const returnChange = function returnChangeCoinsFromLocalStorage() {
  const insert = getFromStorage('insert');
  const coins = getFromStorage('coins');

  if (insert >= 10) {
    const { returnCoins, left, newCoins } = getReturnCoins(insert, coins);
    if (left !== 0) setInStorage('insert', left);
    else removeFromStorage('insert');
    if (!noChange(newCoins)) {
      setInStorage('coins', newCoins);
    } else removeFromStorage('coins');
    return returnCoins;
  }

  return {};
};
