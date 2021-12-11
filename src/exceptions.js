import { vendingMachine } from './index.js';

export const blankInputException = (input) => {
  if (input.length === 0) {
    alert('비어있는 항목이 존재합니다.');
    return true;
  }

  return false;
};

export const outRangeInputException = (input) => {
  if (input <= 0) {
    alert('0을 초과하는 수가 입력되어야 합니다.');
    return true;
  }

  return false;
};

export const outRangeProductPriceInputException = (input) => {
  if (input < 100) {
    alert('상품 가격은 100원부터 시작됩니다.');
    return true;
  }

  return false;
};

export const noIntegerException = (input) => {
  if (!Number.isInteger(input)) {
    alert('정수만 입력될 수 있습니다.');
    return true;
  }

  return false;
};

export const notMultipleOfTenException = (input) => {
  if (input % 10 !== 0) {
    alert('입력되는 금액은 10원으로 나누어 떨어져야 합니다.');
    return true;
  }

  return false;
};

export const duplicatedProductException = (productName) => {
  let isDuplicated = false;

  vendingMachine.products.forEach((product) => {
    if (product.name === productName) {
      alert('중복된 상품이 이미 존재합니다.');
      isDuplicated = true;
    }
  });

  return isDuplicated;
};

export const lackOfUserChangeException = (price) => {
  if (vendingMachine.userAmount >= price) {
    return false;
  } else {
    alert('잔돈이 부족합니다.');
    return true;
  }
};
