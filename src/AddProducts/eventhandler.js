import { getDOMObj } from '../Utils.js';
import registerProduct from './models.js';

const getProductInput = function getProductInputValues() {
  const nameVal = getDOMObj('#product-name-input').value;
  const priceVal = getDOMObj('#product-price-input').value * 1;
  const quantityVal = getDOMObj('#product-quantity-input').value * 1;
  return { nameVal, priceVal, quantityVal };
};

const handleProductInput = function handleProductFormInput() {
  const { nameVal, priceVal, quantityVal } = getProductInput();

  const register = registerProduct(nameVal, priceVal, quantityVal);

  if (register) {
    this.addProductTableRow(nameVal, {
      price: priceVal,
      quantity: quantityVal,
    });
    this.clearForm();
  }
};

export default handleProductInput;
