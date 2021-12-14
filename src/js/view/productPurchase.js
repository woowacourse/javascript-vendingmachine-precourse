import { $ } from '../utils/querySelector.js';
import { getLocalStorage } from '../utils/storage.js';
import { AMOUNT_ID, STORAGE_NAME } from '../utils/constants.js';
import {
  productPurchaseTemplate,
  purchaseAbleListTemplate,
  returnedCoinTemplate,
} from '../components/purchase/productPurchaseTemplate.js';
import { showCurrentAmount } from './currentAmount.js';
import {
  handleChargeInput,
  handlePurchaseButtonClick,
  handleCoinReturnClick,
} from '../components/purchase/productPurchase.js';

export const showReturnedCoin = (unit, quantity) => {
  const returnedCoin = returnedCoinTemplate(unit, quantity);
  $('#coin-return-result').insertAdjacentHTML('beforeend', returnedCoin);
};

const initProductPurchaseList = (storedProductItems) => {
  storedProductItems.forEach((item) => {
    const productItem = purchaseAbleListTemplate(item);
    $('#product-purchase-list').insertAdjacentHTML('beforeend', productItem);
  });
};

const initProductPurchaseMenu = (storedProductList, storedUserAmount) => {
  if (storedProductList) {
    initProductPurchaseList(storedProductList);
  }
  if (storedUserAmount) {
    showCurrentAmount(AMOUNT_ID.USER, storedUserAmount);
  }
};

export const showProductPurchaseMenu = () => {
  $('#app-container').innerHTML = productPurchaseTemplate;
  const storedProductList = getLocalStorage(STORAGE_NAME.PRODUCT);
  const storedUserAmount = getLocalStorage(STORAGE_NAME.USER_AMOUNT);

  initProductPurchaseMenu(storedProductList, storedUserAmount);

  const $productPurchaseItems = document.querySelectorAll('.product-purchase-item');
  $productPurchaseItems.forEach((item) =>
    item.addEventListener('click', handlePurchaseButtonClick),
  );
  $('form').addEventListener('submit', handleChargeInput);
  $('#coin-return-button').addEventListener('click', handleCoinReturnClick);
};
