import { PRODUCT_QUANTITY } from '../../const.js';

const { min } = PRODUCT_QUANTITY;

function isValidProductQuantity(productQuantity) {
  return productQuantity >= min;
}

export default isValidProductQuantity;
