import { $ } from './util/dom.js';
import { checkNotNum, checkMenuPriceDivideTen } from './addMenu.js';

export const addMoney = e => {
  e.preventDefault();
  const money = $('#vending-machine-charge-input').value;
  if (checkNotNum(money) || checkMenuPriceDivideTen(money)) {
    window.alert('잘못된 값을 입력하셨습니다.');
  } else {
    let chargedMoney = 0;
    const localStorageValue = JSON.parse(localStorage.getItem('money'));
    if (localStorageValue !== null) {
      chargedMoney = parseInt(localStorageValue, 10);
    }
    chargedMoney += parseInt(money);
    $(
      '#vending-machine-charge-amount',
    ).innerText = `보유 금액: ${chargedMoney}`;
    localStorage.setItem('money', JSON.stringify(chargedMoney));
  }
};
