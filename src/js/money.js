import { $ } from './util/dom.js';
import { checkNotNum, checkMenuPriceDivideTen } from './addMenu.js';
import { renderMoney } from './render.js';

export const addMoney = e => {
  e.preventDefault();
  const money = $('#vending-machine-charge-input').value;
  if (checkNotNum(money) || checkMenuPriceDivideTen(money)) {
    window.alert('잘못된 값을 입력하셨습니다.');
  } else {
    localStorage.setItem('money', JSON.stringify(renderMoney()));
  }
};

export const getCoins = () => {
  let money = parseInt($('#vending-machine-charge-input').value, 10);
  const fiveHundredCoin = getRandomCoin(parseInt(money / 500, 10));
  money -= fiveHundredCoin * 500;
  const oneHundredCoin = getRandomCoin(parseInt(money / 100, 10));
  money -= oneHundredCoin * 100;
  const fiftyCoin = getRandomCoin(parseInt(money / 50, 10));
  money -= fiftyCoin * 50;
  const tenCoin = getRandomCoin(parseInt(money / 10, 10));
  console.log(fiveHundredCoin, oneHundredCoin, fiftyCoin, tenCoin);
};

export const getRandomCoin = maxCoinNumber => {
  let randomRangeArray = [];
  for (let i = 0; i < maxCoinNumber; i++) {
    randomRangeArray.push(i);
  }
  return MissionUtils.Random.pickNumberInList(randomRangeArray);
};
