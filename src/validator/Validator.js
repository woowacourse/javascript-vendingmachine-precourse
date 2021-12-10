function isNotEmptyName(name) {
  return name.trim() !== '';
}

export default class Validator {
  static isValidAddInput({ name, price, quantity }) {
    if (isNotEmptyName(name)) {
      return true;
    }
  }
}
