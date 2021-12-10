import $ from '../utils/dom.js';
import { resetPurchaseInput } from '../views/resetInput.js';
import printInputCharge from '../views/printInputCharge.js';
import store from '../utils/store.js';
import renderProducts from '../views/renderProducts.js';

const isValidCharge = chargeInput => {
  if (chargeInput === '') {
    alert('공백입니다.');
    return false;
  }
  if (Number(chargeInput % 10 !== 0)) {
    alert('10원으로 나누어지지 않습니다.');
    return false;
  }
  return true;
};

const handleProductPurchase = () => {
  if (store.getLocalStorage('products')) {
    renderProducts();
  }
  let amount = 0;
  $('#charge-button').addEventListener('click', e => {
    e.preventDefault();

    const purchaseInput = $('#charge-input').value;
    if (isValidCharge(purchaseInput)) {
      amount += Number(purchaseInput);
      printInputCharge(amount);

      return;
    }
    resetPurchaseInput();
  });
};

export default handleProductPurchase;
