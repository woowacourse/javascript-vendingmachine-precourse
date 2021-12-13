import $ from '../common/selector.js';
import { store } from '../common/store.js';
import { renderPurchaseProduct } from './renderPurchaseProduct.js';
import { inputMoneyValidation } from '../common/inputMoneyValidation.js';
import { clearInput } from '../common/clearInput.js';
import { purchaseProduct } from './purchaseProduct.js';

export const inputUserMoney = state => {
  const money = $('#charge-input').value;

  const { isError, inValidText } = inputMoneyValidation(money);

  if (isError) {
    alert(inValidText);
    clearInput('#charge-input');
    return;
  }

  if (!state.purchase.input) {
    state.purchase = {
      input: money,
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
  } else {
    state.purchase.input = Number(state.purchase.input) + Number(money);
  }

  store.setData(state);
  renderPurchaseProduct(state);
};
