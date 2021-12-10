import { $ } from '../../utils/querySelector.js';
import { isValidProductValue } from '../../utils/validation.js';
import { setProductItemStorage, getProductItemStorage } from '../storage/product.js';
import {
  addProductItem,
  productManageTemplate,
  initProductManageScreen,
} from './manageTemplate.js';

function handleProductMenuSubmit(event) {
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
  setProductItemStorage(productData);
}

export default function showProductManage() {
  $('#app-container').innerHTML = productManageTemplate;
  const storedProductItems = Array(getProductItemStorage());

  if (storedProductItems[0].name) {
    initProductManageScreen(storedProductItems);
  }

  $('form').addEventListener('submit', handleProductMenuSubmit);
}
