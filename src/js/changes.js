import { $ } from './util/dom.js';
import { checkNotNum, checkMenuPriceDivideTen } from './addMenu.js';
import {
  renderMoney,
  renderCoinsItems,
  renderChangesItems,
  renderReturnChanges,
} from './render.js';
import { COINS, COINS_PRICE } from './constant/constant.js';

export const addChanges = e => {
  e.preventDefault();
  const money = $('#vending-machine-charge-input').value;
  if (checkNotNum(money) || checkMenuPriceDivideTen(money)) {
    window.alert('잘못된 값을 입력하셨습니다.');
  } else {
    localStorage.setItem('changes', JSON.stringify(renderMoney()));
  }
};

export const getCoins = () => {
  let money = parseInt($('#vending-machine-charge-input').value, 10);
  const fiveHundredCoins = getRandomCoin(parseInt(money / 500, 10));
  money -= fiveHundredCoins * 500;
  const oneHundredCoins = getRandomCoin(parseInt(money / 100, 10));
  money -= oneHundredCoins * 100;
  const fiftyCoins = getRandomCoin(parseInt(money / 50, 10));
  money -= fiftyCoins * 50;
  const tenCoins = parseInt(money / 10, 10);
  setCoins(fiveHundredCoins, oneHundredCoins, fiftyCoins, tenCoins);
  renderCoinsItems();
};

const setCoins = (fiveHundredCoins, oneHundredCoins, fiftyCoins, tenCoins) => {
  let coinsArray = [fiveHundredCoins, oneHundredCoins, fiftyCoins, tenCoins];
  for (let i = 0; i < COINS.length; i++) {
    const localStorageCoin = localStorage.getItem(`${COINS[i]}`);
    if (localStorageCoin !== null) {
      coinsArray[i] += parseInt(localStorageCoin, 10);
    }
    localStorage.setItem(`${COINS[i]}`, coinsArray[i]);
  }
};

const setChanges = coinsArray => {
  for (let i = 0; i < COINS.length; i++) {
    localStorage.setItem(`${COINS[i]}`, coinsArray[i]);
  }
};

export const getRandomCoin = maxCoinNumber => {
  let randomRangeArray = [];
  for (let i = 0; i < maxCoinNumber; i++) {
    randomRangeArray.push(i);
  }
  return MissionUtils.Random.pickNumberInList(randomRangeArray);
};

export const returnCoin = () => {
  let coinsArray = [0, 0, 0, 0];
  let money = localStorage.getItem('money');
  for (let i = 0; i < COINS.length; i++) {
    const localStorageCoin = localStorage.getItem(`${COINS[i]}`);
    if (localStorageCoin !== null) {
      coinsArray[i] += parseInt(localStorageCoin, 10);
    }
  }
  calculateChanges(coinsArray, money);
};

export const calculateChanges = (coinsArray, money) => {
  let changes = localStorage.getItem('changes');
  for (let i = 0; i < coinsArray.length; i++) {
    while (money >= parseInt(COINS_PRICE[i], 10) && coinsArray[i] > 0) {
      money -= parseInt(COINS_PRICE[i], 10);
      changes -= parseInt(COINS_PRICE[i], 10);
      coinsArray[i] -= 1;
    }
  }
  setChanges(coinsArray);
  localStorage.setItem('money', money);
  localStorage.setItem('changes', changes);
  renderChangesItems();
  renderReturnChanges();
};
