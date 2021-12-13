import $ from '../common/selector.js';
import { clearInput } from '../common/clearInput.js';
import { store } from '../common/store.js';
import { inputMoneyValidation } from '../common/inputMoneyValidation.js';
import { renderChange } from './renderChange.js';
import { COINS } from '../../constants/constants.js';

export const inputChange = state => {
  const money = $('#vending-machine-charge-input').value;
  const { isError, inValidText } = inputMoneyValidation(money);

  if (isError) {
    alert(inValidText);
    clearInput('#vending-machine-charge-input');
    return;
  }

  // 상수화 필요함!
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

  let insertedMoney = Number(money);

  while (insertedMoney) {
    const coin = MissionUtils.Random.pickNumberInList(COINS);
    if (coin <= insertedMoney) {
      state.change[coin]++;
      insertedMoney -= coin;
    }
  }

  store.setData(state);
  renderChange(state);
};
