import { isValidProduct } from '../validation.js';
import { getFromStorage, setInStorage } from '../store.js';

const registerProduct = function addProductToLocalStorage(
  name,
  price,
  quantity,
) {
  if (isValidProduct(name, price, quantity)) {
    const productObjects = getFromStorage('products') || {};
    productObjects[name] = { price, quantity };
    setInStorage('products', productObjects);
    return true;
  }

  return false;
};

export default registerProduct;
