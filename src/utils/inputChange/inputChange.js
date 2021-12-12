import $ from '../common/selector.js';
import { store } from '../common/store.js';
import { renderChange } from './renderChange.js';

export const inputChange = state => {
  const money = $('#vending-machine-charge-input').value;

  if (!state.change.amount) {
    state.change = {
      amount: money,
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
  } else {
    console.log('뭐야?');
    state.change.amount = Number(state.change.amount) + Number(money);
  }

  store.setData(state);
  renderChange(state);
};
