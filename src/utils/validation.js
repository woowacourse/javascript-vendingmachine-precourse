import { $id } from './dom.js';

const isEmpty = (inputValue) => {
  return inputValue === '';
};
const isContainsBlank = (productNameInput) => {
  return productNameInput.replace(/ /g, '').length === 0;
};

const isNumberType = (productNameInput) => {
  return !isNaN(Number(productNameInput));
};

const isInValidInteger = (inputValue) => {
  return !Number.isInteger(Number(inputValue));
};

const isSmallerThan100 = (inputValue) => {
  return inputValue < 100;
};

const isNotDividedBy10 = (inputValue) => {
  return inputValue % 10 !== 0;
};

const isSameOrLessZero = (inputValue) => {
  return inputValue <= 0;
};

const isInValidProductName = () => {
  const productNameInput = $id('product-name-input').value;

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

const isInValidProductPrice = () => {
  const productPriceInput = $id('product-price-input').value;

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

const isInValidQuantityInput = () => {
  const productQuantityInput = $id('product-quantity-input').value;

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

export const isValidProductAdd = () => {
  if (isInValidProductName()) {
    return false;
  }

  if (isInValidProductPrice()) {
    return false;
  }

  if (isInValidQuantityInput()) {
    return false;
  }

  return true;
};
