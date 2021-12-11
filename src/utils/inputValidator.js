import {
  COINS_PRICE_MIN,
  PRODUCT_PRICE_MIN,
  PRODUCT_PRICE_MOD,
} from '../constants/index.js';
import {
  INPUT_CHARGE_AMOUNT_RULE_VIOLATED,
  INPUT_EMPTY,
  INPUT_NO_NATURAL_NUMBER,
  INPUT_PRODUCT_MANAGE_PRICE_RULE_VIOLATED,
} from './errorHandler.js';
import { parseNumber } from './inputParser.js';
import Validator from './validator.js';

const rejectEmptyInput = (input) => {
  if (!input?.length) {
    return Validator.rejectWith(INPUT_EMPTY);
  }

  return Validator.success();
};

const successIfNaturalNumber = (input) => {
  const inputNumber = parseNumber(input);

  if (Number.isInteger(inputNumber) && inputNumber > 0) {
    return Validator.success();
  }

  return Validator.rejectWith(INPUT_NO_NATURAL_NUMBER);
};

const successIfProductManagePriceRule = (input) => {
  const inputNumber = parseNumber(input);

  if (
    Number.isInteger(inputNumber) &&
    inputNumber % PRODUCT_PRICE_MOD === 0 &&
    inputNumber >= PRODUCT_PRICE_MIN
  ) {
    return Validator.success();
  }

  return Validator.rejectWith(INPUT_PRODUCT_MANAGE_PRICE_RULE_VIOLATED);
};

const successIfChargeAmountRule = (input) => {
  const inputNumber = parseNumber(input);

  // TODO: 코인들로 구성할 수 없는 금액 판별법? 지금은 높은 금액을 낮은 금액으로 구성가능해서 MIN만 확인하면 됨
  if (Number.isInteger(inputNumber) && inputNumber % COINS_PRICE_MIN === 0) {
    return Validator.success();
  }

  return Validator.rejectWith(INPUT_CHARGE_AMOUNT_RULE_VIOLATED);
};

/* 상품 추가 */
const productNameValidateFuncs = [
  (productInput) => rejectEmptyInput(productInput.name),
];

const productPriceValidateFuncs = [
  (productInput) => rejectEmptyInput(productInput.price),
  (productInput) => successIfNaturalNumber(productInput.price),
  (productInput) => successIfProductManagePriceRule(productInput.price),
];

const productCountValidateFuncs = [
  (productInput) => rejectEmptyInput(productInput.count),
  (productInput) => successIfNaturalNumber(productInput.count),
];

export const productAppendInputValidator = new Validator([
  ...productNameValidateFuncs,
  ...productPriceValidateFuncs,
  ...productCountValidateFuncs,
]);

/* 잔돈 충전 & 상품 구매 */
export const chargeAmountValidator = new Validator([
  rejectEmptyInput,
  successIfNaturalNumber,
  successIfChargeAmountRule,
]);
