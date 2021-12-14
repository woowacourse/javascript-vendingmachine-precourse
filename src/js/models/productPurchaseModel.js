import $ from '../utils/dom.js';
import store from '../utils/store.js';
import { PRICE } from '../utils/constants.js';

const getAmount = (coinKinds, countCharge) => {
  let amount = 0;
  countCharge.forEach((count, idx) => {
    amount += count * coinKinds[idx];
  });
  return amount;
};

const setCoinsLocal = (coinAmount, countCharge, coinKinds) => {
  const hasCoin = store.getLocalStorage('coins');

  hasCoin.amount -= getAmount(coinKinds, countCharge);
  hasCoin.fiveHundred = coinAmount[0];
  hasCoin.oneHundred = coinAmount[1];
  hasCoin.fifty = coinAmount[2];
  hasCoin.ten = coinAmount[3];

  store.setLocalStorage('coins', hasCoin);
};

const renderCountCharge = (coinKinds, countCharge) => {
  coinKinds.forEach((coin, idx) => {
    $(`#coin-${coin}-quantity`).innerText = `${countCharge[idx]}개`;
  });
};

const calculateCharge = change => {
  const hasCoin = store.getLocalStorage('coins');
  const coinAmount = [hasCoin.fiveHundred, hasCoin.oneHundred, hasCoin.fifty, hasCoin.ten];
  const coinKinds = [PRICE.FIVE_HUNDRED_WON, PRICE.ONE_HUNDRED_WON, PRICE.FIFTY_WON, PRICE.TEN_WON];
  const countCharge = [0, 0, 0, 0];

  coinKinds.forEach((coin, idx) => {
    const needCount = Math.floor(change / coin);
    let returnCount;
    if (needCount > coinAmount[idx]) {
      returnCount = coinAmount[idx];
      coinAmount[idx] = 0;
    } else if (needCount <= coinAmount[idx]) {
      returnCount = needCount;
      coinAmount[idx] -= needCount;
    }
    change -= coin * returnCount;
    countCharge[idx] = returnCount;
  });
  setCoinsLocal(coinAmount, countCharge, coinKinds);
  renderCountCharge(coinKinds, countCharge);
  return change;
};

export const getChange = () => {
  let change = Number($('#charge-amount').innerText);
  change = calculateCharge(change);
  return change;
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
