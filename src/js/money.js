import { $ } from './util/dom.js';
import store from './store/store.js';
import { checkNotNum, checkMenuPriceDivideTen } from './addMenu.js';

export const addMoney = e => {
  e.preventDefault();
  const money = $('#vending-machine-charge-input').value;
};
