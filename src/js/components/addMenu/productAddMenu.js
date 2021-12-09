import { $ } from '../../utils/querySelector.js';
import { isValidProductValue } from '../../utils/validation.js';

export default function handleProductMenuSubmit(event) {
  event.preventDefault();
  const productData = {
    name: $('#product-name-input').value,
    price: $('#product-price-input').value,
    quantity: $('#product-quantity-input').value,
  };
  if (!isValidProductValue(productData)) {
    console.log('부적합');
  }
}
