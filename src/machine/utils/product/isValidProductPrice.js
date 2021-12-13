import { PRODUCT_PRICE } from '../../const.js';

const { min, divider } = PRODUCT_PRICE;
function isValidProductPrice(productPrice) {
  return productPrice >= min && productPrice % divider === 0;
}

export default isValidProductPrice;
