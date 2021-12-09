import { $ } from '../../utils/querySelector.js';
import { isValidProductValue } from '../../utils/validation.js';
import { productItemTemplate } from './addMenuTemplate.js';

const addProductItem = (productData) => {
  const productItem = productItemTemplate(productData);
  $('.product-manage-list').insertAdjacentHTML('beforeend', productItem);
};

export default function handleProductMenuSubmit(event) {
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
}
