import { store } from '../common/store.js';
import { COINS } from '../../constants/constants.js';
import { renderPurchaseProduct } from './renderPurchaseProduct.js';

export const resetChange = state => {
  COINS.map(coin => (state.purchase[coin] = 0));
  store.setData(state);
  renderPurchaseProduct(state);
};
