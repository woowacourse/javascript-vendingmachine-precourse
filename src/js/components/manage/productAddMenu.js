import { $ } from '../../utils/querySelector.js';
import { STORAGE_NAME } from '../../utils/constants.js';
import { isValidProductValue } from '../../utils/validation.js';
import { setLocalStorage, getLocalStorage } from '../../utils/storage.js';
import { initProductManageScreen } from '../../view/view.js';

const setProductItemsStorage = (productData) => {
  const storedProductItems = getLocalStorage(STORAGE_NAME.PRODUCT);
  storedProductItems.push(productData);
  setLocalStorage(STORAGE_NAME.PRODUCT, storedProductItems);
};

export const handleProductMenuSubmit = (event) => {
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
