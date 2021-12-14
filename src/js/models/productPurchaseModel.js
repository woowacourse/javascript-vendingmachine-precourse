import $ from '../utils/dom.js';
import store from '../utils/store.js';
import { PRICE } from '../utils/constants.js';

const coinKinds = [PRICE.FIVE_HUNDRED_WON, PRICE.ONE_HUNDRED_WON, PRICE.FIFTY_WON, PRICE.TEN_WON];

const getAmount = countCharge => {
  let amount = 0;
  countCharge.forEach((count, idx) => {
    amount += count * coinKinds[idx];
  });
  return amount;
};

const setCoinsLocal = (coinAmount, countCharge) => {
  const hasCoin = store.getLocalStorage('coins');

  hasCoin.amount -= getAmount(countCharge);
  hasCoin.fiveHundred = coinAmount[0];
  hasCoin.oneHundred = coinAmount[1];
  hasCoin.fifty = coinAmount[2];
  hasCoin.ten = coinAmount[3];

  store.setLocalStorage('coins', hasCoin);
};

export const calculateCharge = change => {
  const hasCoin = store.getLocalStorage('coins');
  const coinAmount = [hasCoin.fiveHundred, hasCoin.oneHundred, hasCoin.fifty, hasCoin.ten];
  const countCharge = [0, 0, 0, 0];

  coinKinds.forEach((coin, idx) => {
    const needCount = Math.floor(change / coin);
    if (needCount > coinAmount[idx]) {
      change -= coin * coinAmount[idx];
      countCharge[idx] = coinAmount[idx];
      coinAmount[idx] = 0;
    } else if (needCount <= coinAmount[idx]) {
      change -= coin * needCount;
      countCharge[idx] = needCount;
      coinAmount[idx] -= needCount;
    }
  });
  store.setLocalStorage('inputMoney', change);
  setCoinsLocal(coinAmount, countCharge);
  return countCharge;
};

export const getChange = () => {
  const hasCoin = store.getLocalStorage('coins');
  const change = Number($('#charge-amount').innerText);

  if (change > hasCoin.amount) {
    return change - hasCoin.amount;
  }
  return 0;
};

export const updateAmount = (inputMoney, productPrice) => {
  inputMoney -= productPrice;
  return inputMoney;
};

export const updateProductQuantity = e => {
  const purchaseIndex = e.target.closest('.product-purchase-item').querySelector('.product-purchase-quantity').dataset.productQuantity;
  const products = store.getLocalStorage('products');

  if (products[purchaseIndex].quantity) {
    products[purchaseIndex].quantity -= 1;
    store.setLocalStorage('products', products);
    e.target.closest('.product-purchase-item').querySelector('.product-purchase-quantity').innerText -= 1;
  }
};
