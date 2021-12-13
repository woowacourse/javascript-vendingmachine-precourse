import $ from '../common/selector.js';
import { TITLES } from '../../constants/constants.js';
import { purchaseTemplates } from '../../constants/purchaseTemplates.js';

export const renderPurchaseProduct = state => {
  $('#tab-title').innerText = TITLES.PURCHASE_TAB;
  $('#input_form').innerHTML = purchaseTemplates.inputMoney(
    state.purchase.input,
  );
  $('#contents').innerHTML = purchaseTemplates.productList();
};
