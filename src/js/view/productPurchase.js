import { $ } from '../utils/querySelector.js';
import { getLocalStorage } from '../utils/storage.js';
import { AMOUNT_ID, STORAGE_NAME } from '../utils/constants.js';
import { productPurchaseTemplate } from '../components/purchase/productPurchaseTemplate.js';
import { showCurrentAmount, initProductPurchaseList } from './view.js';
import {
  handleChargeInput,
  handlePurchaseButtonClick,
  handleCoinReturnClick,
} from '../components/purchase/productPurchase.js';

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
