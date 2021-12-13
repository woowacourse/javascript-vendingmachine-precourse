import { getProducts } from '../../../library/storage/products.js';
import hasNumber from '../../../utils/hasNumber.js';
import hasSpecialCharacter from '../../../utils/hasSpecialCharacter.js';
import hasWhiteSpace from '../../../utils/hasWhiteSpace.js';

function isValidProductName(productName) {
  const currentProductNames = getProducts().map((product) => product.name);
  return (
    currentProductNames.includes(productName) === -1 &&
    !hasNumber(productName) &&
    !hasWhiteSpace(productName) &&
    !hasSpecialCharacter(productName)
  );
}

export default isValidProductName;
