import { $ } from './util/dom.js';
import store from './store/store.js';
import { checkNotNum, checkMenuPriceDivideTen } from './addMenu.js';

export const addMoney = e => {
  e.preventDefault();
  const money = $('#vending-machine-charge-input').value;
  if (checkNotNum(money) || checkMenuPriceDivideTen(money)) {
    window.alert('잘못된 값을 입력하셨습니다.');
  } else {
    $('#vending-machine-charge-amount').innerText += ` ${money}`;
  }
};
