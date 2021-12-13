import { ERROR_MESSAGE, STANDARD, STORAGE_NAME } from '../../utils/constants.js';
import { $ } from '../../utils/querySelector.js';
import { isDivideByTen } from '../../utils/validation.js';
import { showCurrentAmount } from '../../view/view.js';
import { getLocalStorage } from '../storage/storage.js';
import { initProductPurchaseList, productPurchaseTemplate } from './productPurchaseTemplate.js';

let currentAmount = STANDARD.CURRENT_MONEY;
const chargeAmountId = '#charge-amount';
const storedProductItems = getLocalStorage(STORAGE_NAME.PRODUCT);

const resetProductItemStorage = (name) => {
  const productItems = storedProductItems.map((item) => {
    if (item.name === name) {
      item.quantity -= 1;
    }
    return item;
  });
  localStorage.setItem(STORAGE_NAME.PRODUCT, JSON.stringify(productItems));
};

const subtractPriceAndQuantity = (target, price) => {
  target.childNodes[5].dataset.productQuantity--;
  target.childNodes[5].innerText--;
  currentAmount -= price;
};

const handlePurchaseButtonClick = (event) => {
  const target = event.target.parentElement.parentElement;
  const name = target.childNodes[1].dataset.productName;
  const price = target.childNodes[3].dataset.productPrice;

  subtractPriceAndQuantity(target, price);
  showCurrentAmount(chargeAmountId, currentAmount);
  resetProductItemStorage(name);
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
  const storedProductList = getLocalStorage(STORAGE_NAME.PRODUCT);

  if (storedProductList) {
    initProductPurchaseList(storedProductList);
  }

  const $productPurchaseItems = document.querySelectorAll('.product-purchase-item');
  $productPurchaseItems.forEach((item) =>
    item.addEventListener('click', handlePurchaseButtonClick),
  );
  $('form').addEventListener('submit', handleChargeInput);
};
