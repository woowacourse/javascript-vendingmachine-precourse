import $ from '../utils/dom.js';

export const resetPurchaseInput = () => {
  $('#charge-input').value = '';
};

export const printInputCharge = holdAmount => {
  $('#charge-amount').innerText = holdAmount;
};
