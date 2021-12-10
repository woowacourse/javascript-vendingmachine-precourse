import { $ } from './util/dom.js';
import { checkNotNum, checkMenuPriceDivideTen } from './addMenu.js';
import { renderMoney, renderCoinsItems } from './render.js';
import { COINS } from './constant/constant.js';

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
  renderCoinsItems();
};

export const getRandomCoin = maxCoinNumber => {
  let randomRangeArray = [];
  for (let i = 0; i < maxCoinNumber; i++) {
    randomRangeArray.push(i);
  }
  return MissionUtils.Random.pickNumberInList(randomRangeArray);
};
