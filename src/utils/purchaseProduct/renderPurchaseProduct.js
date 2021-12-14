import $ from '../common/selector.js';
import { TITLES } from '../../constants/constants.js';
import { purchaseTemplates } from '../../constants/purchaseTemplates.js';

export const renderPurchaseProduct = state => {
  const { inputMoney, productTable, productItem, change } = purchaseTemplates;

  const productList = state.products
    .map(product => {
      return productItem(product);
    })
    .join('');

  $('#tab-title').innerText = TITLES.PURCHASE_TAB;
  $('#input_form').innerHTML = inputMoney(state.purchase.input);
  $('#contents').innerHTML = productTable;
  $('.product-purchase-list').innerHTML = productList;
  $('#product-table').insertAdjacentHTML('afterend', change(state.purchase));
};
