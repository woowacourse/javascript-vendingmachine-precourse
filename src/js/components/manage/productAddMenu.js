import { STORAGE_NAME } from '../../utils/constants.js';
import { $ } from '../../utils/querySelector.js';
import { isValidProductValue } from '../../utils/validation.js';
import { setLocalStorage, getLocalStorage } from '../../utils/storage.js';
import { productManageTemplate } from './manageTemplate.js';
import { initProductManageScreen } from '../../view/view.js';

const setProductItemsStorage = (productData) => {
  const storedProductItems = getLocalStorage(STORAGE_NAME.PRODUCT);
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

  initProductManageScreen(Array(productData));
  setProductItemsStorage(productData);
};

export const showProductAddMenu = () => {
  $('#app-container').innerHTML = productManageTemplate;
  const storedProductItems = getLocalStorage(STORAGE_NAME.PRODUCT);

  if (storedProductItems) {
    initProductManageScreen(storedProductItems);
  }

  $('form').addEventListener('submit', handleProductMenuSubmit);
};
