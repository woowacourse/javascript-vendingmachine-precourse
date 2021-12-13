import { ERROR_MESSAGE, STANDARD } from '../../utils/constants.js';
import { $ } from '../../utils/querySelector.js';
import { isDivideByTen } from '../../utils/validation.js';
import { showCurrentAmount } from '../../view/view.js';
import { getProductItemStorage } from '../storage/product.js';
import { initProductPurchaseList, productPurchaseTemplate } from './productPurchaseTemplate.js';

let currentAmount = STANDARD.CURRENT_MONEY;
const chargeAmountId = '#charge-amount';

const handlePurchaseButtonClick = (event) => {
  const target = event.target.parentElement.parentElement;
  const name = target.childNodes[1].dataset.productName;
  const price = target.childNodes[3].dataset.productPrice;
  const quantity = target.childNodes[5].dataset.productQuantity;

  target.childNodes[5].dataset.productQuantity--;
  target.childNodes[5].innerText--;

  currentAmount -= price;
  showCurrentAmount(chargeAmountId, currentAmount);
};

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

  const $productPurchaseItems = document.querySelectorAll('.product-purchase-item');
  $productPurchaseItems.forEach((item) =>
    item.addEventListener('click', handlePurchaseButtonClick),
  );
  $('form').addEventListener('submit', handleChargeInput);
};
