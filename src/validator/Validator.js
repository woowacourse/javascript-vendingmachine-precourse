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

export default class Validator {
  static isValidAddInput({ name, price, quantity }) {
    return isNotEmptyName(name) && isValidPrice(price);
  }
}
