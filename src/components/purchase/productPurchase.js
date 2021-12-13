import { ERROR_MESSAGE, STANDARD } from '../../utils/constants.js';
import { $ } from '../../utils/querySelector.js';
import { isDivideByTen } from '../../utils/validation.js';
import { showCurrentAmount } from '../../view/view.js';
import { getProductItemStorage } from '../storage/product.js';
// eslint-disable-next-line import/no-cycle
import { initProductPurchaseList, productPurchaseTemplate } from './productPurchaseTemplate.js';

let currentAmount = STANDARD.CURRENT_MONEY;
const chargeAmountId = '#charge-amount';

export const handlePurchaseButtonClick = () => {
  const price = $('.product-purchase-price');
  const quantity = $('.product-purchase-quantity');

  // eslint-disable-next-line no-plusplus
  quantity.textContent--;
  // eslint-disable-next-line no-plusplus
  quantity.dataset.productQuantity--;
  currentAmount -= price.textContent;
  showCurrentAmount(chargeAmountId, currentAmount);
};

// eslint-disable-next-line consistent-return
const handleChargeInput = (event) => {
  event.preventDefault();
  const chargeInput = Number($('#charge-input').value);

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
