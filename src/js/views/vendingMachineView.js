import $ from '../utils/dom.js';
import store from '../utils/store.js';

export const resetChargeInput = () => {
  $('#vending-machine-charge-input').value = '';
};

export const renderChargeMoney = () => {
  const coins = store.getLocalStorage('coins');
  $('#vending-machine-charge-amount').innerText = `${coins.amount}원`;
  $('#vending-machine-coin-500-quantity').innerText = `${coins.fiveHundred}개`;
  $('#vending-machine-coin-100-quantity').innerText = `${coins.oneHundred}개`;
  $('#vending-machine-coin-50-quantity').innerText = `${coins.fifty}개`;
  $('#vending-machine-coin-10-quantity').innerText = `${coins.ten}개`;
};
