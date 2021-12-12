import { ERROR_MSG } from '../../constants/constants.js';

export const checkProductValidation = (product, price, quantity) => {
  const validation = {
    isError: false,
    inValidText: '',
  };

  if (!product || !price || !quantity) {
    validation.isError = true;
    validation.inValidText = ERROR_MSG.INPUT_ALL;
    return validation;
  }

  if (price < 100 || price % 10) {
    validation.isError = true;
    validation.inValidText = ERROR_MSG.VALIDATE_PRICE;
    return validation;
  }

  if (quantity < 1) {
    validation.isError = true;
    validation.inValidText = ERROR_MSG.VALIDATE_QUANTITY;
    return validation;
  }

  return validation;
};
