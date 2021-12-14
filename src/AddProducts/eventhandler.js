import { getDOMObj } from '../utils/generalUtils.js';
import {
  ID_PRODUCT_NAME_INPUT,
  ID_PRODUCT_PRICE_INPUT,
  ID_PRODUCT_QUANTITY_INPUT,
} from './constants.js';
import registerProduct from './models.js';

const getProductInput = function getProductInputValues() {
  const nameVal = getDOMObj(`#${ID_PRODUCT_NAME_INPUT}`).value;
  const priceVal = getDOMObj(`#${ID_PRODUCT_PRICE_INPUT}`).value * 1;
  const quantityVal = getDOMObj(`#${ID_PRODUCT_QUANTITY_INPUT}`).value * 1;
  return { nameVal, priceVal, quantityVal };
};

const handleProductInput = function handleProductFormInput() {
  const { nameVal, priceVal, quantityVal } = getProductInput();

  const registerSuccess = registerProduct(nameVal, priceVal, quantityVal);

  if (registerSuccess) {
    this.addProductTableRow(nameVal, {
      price: priceVal,
      quantity: quantityVal,
    });
    this.clearForm();
  }
};

export default handleProductInput;
