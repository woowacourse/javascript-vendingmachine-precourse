import { $ } from './util/dom.js';
import {
  checkNotNum,
  checkMenuPriceDivideTen,
  checkInputMoneyRange,
} from './addMenu.js';
import { renderInputedMoneyAmount } from './render.js';

export const addMoney = e => {
  e.preventDefault();
  const money = $('#charge-input').value;
  if (
    checkNotNum(money) ||
    checkMenuPriceDivideTen(money) ||
    checkInputMoneyRange(money)
  ) {
    window.alert('잘못된 값을 입력하셨습니다.');
  } else {
    localStorage.setItem('money', JSON.stringify(renderInputedMoneyAmount()));
  }
};
