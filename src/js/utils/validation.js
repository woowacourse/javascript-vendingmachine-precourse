import { getLocalStorage } from '../components/storage/storage.js';
import { ERROR_MESSAGE, STANDARD, STORAGE_NAME } from './constants.js';

const { CANNOT_BE_BLANK, LESS_THAN_STANDARD, NOT_DIVIDE_BY_TEN, COUNT_TOO_SMALL, CAN_NOT_OVERLAP } =
  ERROR_MESSAGE;
const { PRICE_MINIMUM, DIVIDE_NUMBER, PRODUCT_QUANTITY } = STANDARD;

const isNegativeNumber = (quantity) => {
  return quantity < PRODUCT_QUANTITY;
};

const isDivideByTen = (target) => {
  return target % DIVIDE_NUMBER !== 0;
};

const isMinimumPrice = (price) => {
  return PRICE_MINIMUM <= price;
};

const isNameOverlap = (newName) => {
  const storedItemName = getLocalStorage(STORAGE_NAME.PRODUCT);
  return storedItemName.find(({ name }) => name === newName);
};

const isValueBlank = ({ name, price, quantity }) => {
  return [name, price, quantity].includes('');
};

const isValidProductPrice = (price) => {
  if (!isMinimumPrice(price)) {
    return alert(LESS_THAN_STANDARD);
  }
  if (isDivideByTen(price)) {
    return alert(NOT_DIVIDE_BY_TEN);
  }
  return true;
};

export const isValidInputAmount = (amount) => {
  if (isNegativeNumber(amount)) {
    return alert(COUNT_TOO_SMALL);
  }
  if (isDivideByTen(amount)) {
    return alert(NOT_DIVIDE_BY_TEN);
  }
  return true;
};

export const isValidProductValue = (productData) => {
  const { name, price, quantity } = productData;

  if (isValueBlank(productData)) {
    return alert(CANNOT_BE_BLANK);
  }
  if (isNameOverlap(name)) {
    return alert(CAN_NOT_OVERLAP);
  }
  if (isNegativeNumber(quantity)) {
    return alert(COUNT_TOO_SMALL);
  }
  if (!isValidProductPrice(price)) return false;
  return true;
};
