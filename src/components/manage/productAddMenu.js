import { STORAGE_NAME } from '../../utils/constants.js';
import { $ } from '../../utils/querySelector.js';
import { isValidProductValue } from '../../utils/validation.js';
import { setLocalStorage, getLocalStorage } from '../storage/storage.js';
import {
  addProductItem,
  productManageTemplate,
  initProductManageScreen,
} from './manageTemplate.js';

const storedProductItems = getLocalStorage(STORAGE_NAME.PRODUCT);

const setProductItemsStorage = (productData) => {
  storedProductItems.push(productData);
  setLocalStorage(STORAGE_NAME.PRODUCT, storedProductItems);
};

const handleProductMenuSubmit = (event) => {
  event.preventDefault();
  const productData = {
    name: $('#product-name-input').value.trim(),
    price: $('#product-price-input').value,
    quantity: $('#product-quantity-input').value,
  };

  if (!isValidProductValue(productData)) {
    return;
  }

  addProductItem(productData);
  setProductItemsStorage(productData);
};

export const showProductManage = () => {
  $('#app-container').innerHTML = productManageTemplate;

  if (storedProductItems) {
    initProductManageScreen(storedProductItems);
  }

  $('form').addEventListener('submit', handleProductMenuSubmit);
};
