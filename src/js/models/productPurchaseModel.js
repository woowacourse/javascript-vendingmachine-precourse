import $ from '../utils/dom.js';
import store from '../utils/store.js';

export const isValidCharge = chargeInput => {
  if (chargeInput === '') {
    alert('공백입니다.');
    return false;
  }
  if (Number(chargeInput) <= 0) {
    alert('0원 이상을 투입하세요.');
    return false;
  }
  if (Number(chargeInput % 10 !== 0)) {
    alert('10원으로 나누어지지 않습니다.');
    return false;
  }
  return true;
};

export const isValidPurchase = (amount, price) => {
  if (price > amount) {
    alert('현재 넣은 금액보다 상품의 가격이 더 높습니다. 돈을 더 넣으세요.');
    return false;
  }
  return true;
};

const calculatefiveHundred = (change, hasCoin) => {
  const needCount = Math.floor(change / 500);
  if (needCount > hasCoin.fiveHundred) {
    change -= 500 * hasCoin.fiveHundred; // 잔돈 계산
    hasCoin.amount -= 500 * hasCoin.fiveHundred;
    $('#coin-500-quantity').innerText = `${hasCoin.fiveHundred}개`;
    hasCoin.fiveHundred = 0;
    store.setLocalStorage('coins', hasCoin);
  } else if (needCount <= hasCoin.fiveHundred) {
    change -= 500 * needCount;
    hasCoin.amount -= 500 * needCount;
    $('#coin-500-quantity').innerText = `${needCount}개`;
    hasCoin.fiveHundred -= needCount;
    store.setLocalStorage('coins', hasCoin);
  }
  return change;
};

const calculateOneHundred = (change, hasCoin) => {
  const needCount = Math.floor(change / 100);
  if (needCount > hasCoin.oneHundred) {
    change -= 100 * hasCoin.oneHundred; // 잔돈 계산
    hasCoin.amount -= 100 * hasCoin.oneHundred;
    $('#coin-100-quantity').innerText = `${hasCoin.oneHundred}개`;
    hasCoin.oneHundred = 0;
    store.setLocalStorage('coins', hasCoin);
  } else if (needCount <= hasCoin.oneHundred) {
    change -= 100 * needCount;
    hasCoin.amount -= 100 * needCount;
    $('#coin-100-quantity').innerText = `${needCount}개`;
    hasCoin.oneHundred -= needCount;
    store.setLocalStorage('coins', hasCoin);
  }
  return change;
};

const calculateFifty = (change, hasCoin) => {
  const needCount = Math.floor(change / 50);
  if (needCount > hasCoin.fifty) {
    change -= 50 * hasCoin.fifty; // 잔돈 계산
    hasCoin.amount -= 50 * hasCoin.fifty;
    $('#coin-50-quantity').innerText = `${hasCoin.fifty}개`;
    hasCoin.fifty = 0;
    store.setLocalStorage('coins', hasCoin);
  } else if (needCount <= hasCoin.fifty) {
    change -= 50 * needCount;
    hasCoin.amount -= 50 * needCount;
    $('#coin-50-quantity').innerText = `${needCount}개`;
    hasCoin.fifty -= needCount;
    store.setLocalStorage('coins', hasCoin);
  }
  return change;
};

const calculateTen = (change, hasCoin) => {
  const needCount = Math.floor(change / 10);
  if (needCount > hasCoin.ten) {
    change -= 10 * hasCoin.ten; // 잔돈 계산
    hasCoin.amount -= 10 * hasCoin.ten;
    $('#coin-10-quantity').innerText = `${hasCoin.ten}개`;
    hasCoin.ten = 0;
    store.setLocalStorage('coins', hasCoin);
  } else if (needCount <= hasCoin.ten) {
    change -= 10 * needCount;
    hasCoin.amount -= 10 * needCount;
    $('#coin-10-quantity').innerText = `${needCount}개`;
    hasCoin.ten -= needCount;
    store.setLocalStorage('coins', hasCoin);
  }
  return change;
};

export const getChange = () => {
  let change = Number($('#charge-amount').innerText);
  const hasCoin = store.getLocalStorage('coins');

  change = calculatefiveHundred(change, hasCoin);

  change = calculateOneHundred(change, hasCoin);

  change = calculateFifty(change, hasCoin);

  change = calculateTen(change, hasCoin);

  $('#charge-amount').innerText = change;
  return change;
};
