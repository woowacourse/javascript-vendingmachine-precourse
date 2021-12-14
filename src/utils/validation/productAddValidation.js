import { isEmpty, isInValidInteger, isNotDividedBy10, isSameOrLessZero } from './common.js';

const isContainsBlank = (productNameInput) => {
  return productNameInput.replace(/ /g, '').length === 0;
};

const isNumberType = (productNameInput) => {
  return !isNaN(Number(productNameInput));
};

const isSmallerThan100 = (inputValue) => {
  return inputValue < 100;
};

const isInValidProductName = (productNameInput) => {
  if (isEmpty(productNameInput)) {
    alert('상품명을 입력해주세요.  ex) 사이다');
    return true;
  }

  if (isContainsBlank(productNameInput)) {
    alert('공백이 아닌 상품명을 입력해주세요.  ex) 사이다');
    return true;
  }

  if (isNumberType(productNameInput)) {
    alert('숫자 타입이 아닌 상품명을 입력해주세요.  ex) 사이다');
    return true;
  }

  return false;
};

const isInValidProductPrice = (productPriceInput) => {
  if (isEmpty(productPriceInput)) {
    alert('상품의 가격을 입력해주세요.  ex) 1500');
    return true;
  }

  if (isInValidInteger(productPriceInput)) {
    alert('상품의 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.  ex)1500');
    return true;
  }

  if (isSmallerThan100(productPriceInput)) {
    alert('상품의 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.  ex)1500');
    return true;
  }

  if (isNotDividedBy10(productPriceInput)) {
    alert('상품의 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.  ex)1500');
    return true;
  }

  return false;
};

const isInValidQuantityInput = (productQuantityInput) => {
  if (isEmpty(productQuantityInput)) {
    alert('상품의 수량을 입력해주세요.  ex) 20');
    return true;
  }

  if (isInValidInteger(productQuantityInput)) {
    alert('소수 값이 아닌 상품의 수량을 입력해주세요.  ex) 20');
    return true;
  }

  if (isSameOrLessZero(productQuantityInput)) {
    alert('0보다 큰 상품의 수량을 입력해주세요.  ex) 20');
    return true;
  }

  return false;
};

export const isValidProductAddData = (
  productNameInput,
  productPriceInput,
  productQuantityInput
) => {
  if (isInValidProductName(productNameInput)) {
    return false;
  }

  if (isInValidProductPrice(productPriceInput)) {
    return false;
  }

  if (isInValidQuantityInput(productQuantityInput)) {
    return false;
  }

  return true;
};
