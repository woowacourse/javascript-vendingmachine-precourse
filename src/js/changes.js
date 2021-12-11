import { $ } from './util/dom.js';
import { checkNotNum, checkMenuPriceDivideTen } from './addMenu.js';
import {
  renderMoney,
  renderCoinsItems,
  renderChangesItems,
  renderReturnChanges,
  testRender,
} from './render.js';
import { COIN, COINS, COINS_PRICE } from './constant/constant.js';

export const addChanges = e => {
  e.preventDefault();
  const money = $('#vending-machine-charge-input').value;
  if (checkNotNum(money) || checkMenuPriceDivideTen(money)) {
    window.alert('잘못된 값을 입력하셨습니다.');
  } else {
    localStorage.setItem('changes', JSON.stringify(renderMoney()));
    getCoins();
  }
};

export const getCoins = () => {
  let money = parseInt($('#vending-machine-charge-input').value, 10);
  let coinsArray = [];
  while (money >= COIN[COIN.length - 1]) {
    const value = MissionUtils.Random.pickNumberInList(COIN);
    if (value <= money) {
      coinsArray.push(value);
      money -= value;
    }
  }
  console.log(coinsArray);
  setCoins(coinsArray);
  renderCoinsItems();
};

const setCoins = coinsArray => {
  for (let i = 0; i < coinsArray.length; i++) {
    let localStorageCoin = localStorage.getItem(`coin${coinsArray[i]}`);
    if (localStorageCoin === null) {
      localStorageCoin = 1;
    } else {
      localStorageCoin = parseInt(localStorageCoin, 10) + 1;
    }
    localStorage.setItem(`coin${coinsArray[i]}`, localStorageCoin);
  }
};

const setChanges = coinsArray => {
  for (let i = 0; i < COINS.length; i++) {
    localStorage.setItem(`${COINS[i]}`, coinsArray[i]);
  }
};

export const getRandomCoin = maxCoinNumber => {
  let randomRangeArray = [];
  for (let i = 0; i <= maxCoinNumber; i++) {
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
