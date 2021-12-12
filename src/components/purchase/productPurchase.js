import { ERROR_MESSAGE } from '../../utils/constants.js';
import { $ } from '../../utils/querySelector.js';
import { isDivideByTen } from '../../utils/validation.js';
import { getProductItemStorage } from '../storage/product.js';
import { initProductPurchaseList, productPurchaseTemplate } from './productPurchaseTemplate.js';

let chargeAmount = 0;

const showChargeAmount = (chargeInput) => {
  chargeAmount += chargeInput;
  $('#charge-amount').innerHTML = `투입한 금액: ${chargeAmount}`;
};

const handleChargeInput = (event) => {
  event.preventDefault();
  const chargeInput = Number($('#charge-input').value);

  if (isDivideByTen(chargeInput)) {
    return alert(ERROR_MESSAGE.NOT_DIVIDE_BY_TEN);
  }

  showChargeAmount(chargeInput);
};

export const showProductPurchase = () => {
  $('#app-container').innerHTML = productPurchaseTemplate;
  const storedProductList = getProductItemStorage();

  if (storedProductList) {
    initProductPurchaseList(storedProductList);
  }

  $('form').addEventListener('submit', handleChargeInput);
};
