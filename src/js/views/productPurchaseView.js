import $ from '../utils/dom.js';

export const resetPurchaseInput = () => {
  $('#charge-input').value = '';
};

export const printInputCharge = amount => {
  $('#charge-amount').innerText = amount;
};
