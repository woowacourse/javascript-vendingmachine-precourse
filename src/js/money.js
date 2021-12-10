import { $ } from './util/dom.js';
import { checkNotNum, checkMenuPriceDivideTen } from './addMenu.js';
import { renderInputedMoneyAmount } from './render.js';

export const addMoney = e => {
  e.preventDefault();
  const money = $('#charge-input').value;
};
