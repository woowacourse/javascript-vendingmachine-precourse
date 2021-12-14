import { PRICE_MINIMUM, CHARGE_MININUM, DIVIDE_MININUM, ERROR_MSG } from '../constants/index.js';

const isNonEmpty = value => value !== '';
const isNumber = value => !Number.isNaN(value);
const isValidLength = (value, size) => value.length === size;
const isPositiveNumber = number => number > 0 && Number.isInteger(number);
const isDuplicate = (value, items) => {
  if (items.length == 0) return false;
  return items.find(name => value === name);
};
const isMinUpper = (number, minimum) => number >= minimum;
const isDivisible = number => number % DIVIDE_MININUM !== 0;
const hasSpace = value => removeSpace(value).length !== value.length;
const removeSpace = text => text.replace(/ /gi, '');

export const isValidProduct = ({ name, price, quantity }, items) => {
  price = Number(price);
  quantity = Number(quantity);
  if (!isNonEmpty(name)) return alert(ERROR_MSG.enterName);
  if (!isNonEmpty(price)) return alert(ERROR_MSG.enterPrice);
  if (!isNonEmpty(quantity)) return alert(ERROR_MSG.enterQuantity);
  if (isDuplicate(name, items)) return alert(ERROR_MSG.duplicateName);
  if (hasSpace(name)) return alert(ERROR_MSG.hasSpace);
  if (isDivisible(price)) return alert(ERROR_MSG.isPriceDivisible);
  if (!isMinUpper(price, PRICE_MINIMUM)) return alert(ERROR_MSG.priceMinUpper);
  if (!isPositiveNumber(quantity)) return alert(ERROR_MSG.pricePositive);

  return true;
};

export const isValidChargeInput = charge => {
  if (!isNonEmpty(charge)) return alert(ERROR_MSG.enterCharge);
  if (isDivisible(charge)) return alert(ERROR_MSG.isChargeDivisible);
  if (!isMinUpper(charge, CHARGE_MININUM)) return alert(ERROR_MSG.chargeMinUpper);

  return true;
};
