import { store } from '../common/store.js';
import { renderPurchaseProduct } from './renderPurchaseProduct.js';
import { COINS, ERROR_MSG } from '../../constants/constants.js';

export const returnChange = state => {
  let amount = state.change.amount;
  let charge = state.purchase.input;

  if (!amount) {
    alert(ERROR_MSG.INSUFFICIENT_CASH);
    return;
  }

  let i = 0;
  while ((amount || charge) && i <= 3) {
    if (charge >= COINS[i] && state.change[COINS[i]]) {
      charge -= COINS[i];
      amount -= COINS[i];
      state.change[COINS[i]]--;
      state.purchase[COINS[i]]++;
    } else i++;
  }

  charge > amount
    ? (state.change.amount = 0)
    : (state.change.amount = amount - charge);

  charge > amount
    ? (state.purchase.input = charge - amount)
    : (state.purchase.input = 0);

  store.setData(state);
  renderPurchaseProduct(state);
};
