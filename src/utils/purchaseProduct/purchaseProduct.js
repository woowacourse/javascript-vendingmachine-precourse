import $ from '../common/selector.js';
import { store } from '../common/store.js';
import { renderPurchaseProduct } from './renderPurchaseProduct.js';

export const purchaseProduct = state => {
  const money = $('#charge-input').value;

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
