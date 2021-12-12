import { ERROR_MESSAGE, STANDARD } from '../../utils/constants.js';
import { $ } from '../../utils/querySelector.js';
import { isDivideByTen } from '../../utils/validation.js';
import { showCurrentAmount } from '../../view/view.js';
import { getProductItemStorage } from '../storage/product.js';
import { initProductPurchaseList, productPurchaseTemplate } from './productPurchaseTemplate.js';

let currentAmount = STANDARD.CURRENT_MONEY;

// eslint-disable-next-line consistent-return
const handleChargeInput = (event) => {
  event.preventDefault();
  const chargeInput = Number($('#charge-input').value);
  const chargeAmountId = '#charge-amount';

  if (isDivideByTen(chargeInput)) {
    return alert(ERROR_MESSAGE.NOT_DIVIDE_BY_TEN);
  }

  currentAmount += chargeInput;
  showCurrentAmount(chargeAmountId, currentAmount);
};

export const showProductPurchase = () => {
  $('#app-container').innerHTML = productPurchaseTemplate;
  const storedProductList = getProductItemStorage();

  if (storedProductList) {
    initProductPurchaseList(storedProductList);
  }

  $('form').addEventListener('submit', handleChargeInput);
};
