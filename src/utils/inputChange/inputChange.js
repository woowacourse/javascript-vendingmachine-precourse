import $ from '../common/selector.js';
import { clearInput } from '../common/clearInput.js';
import { store } from '../common/store.js';
import { inputChangeValiation } from './inputChangeValidation.js';
import { renderChange } from './renderChange.js';

export const inputChange = state => {
  const money = $('#vending-machine-charge-input').value;
  const { isError, inValidText } = inputChangeValiation(money);

  if (isError) {
    alert(inValidText);
    clearInput('#vending-machine-charge-input');
    return;
  }

  if (!state.change.amount) {
    state.change = {
      amount: money,
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
  } else {
    state.change.amount = Number(state.change.amount) + Number(money);
  }

  store.setData(state);
  renderChange(state);
};
