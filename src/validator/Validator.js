const ADD_ERROR_MESSAGE = '상품명, 가격, 수량을 모두 입력해주세요. 상품명은 100이상 10의 배수여야 합니다.';

function isNotEmptyName(name) {
  return name.trim() !== '';
}

function isAbove100(price) {
  return +price >= 100;
}

function isMultipleOf10(price) {
  return +price % 10 === 0;
}

function isValidPrice(price) {
  return isAbove100(price) && isMultipleOf10(price);
}

function isAboveZero(quantity) {
  return +quantity > 0;
}

export default class Validator {
  static isValidAddInput({ name, price, quantity }) {
    if (
      isNotEmptyName(name)
      && isValidPrice(price)
      && isAboveZero(quantity)
    ) {
      return true;
    }
    alert(ADD_ERROR_MESSAGE);
    return false;
  }
}
