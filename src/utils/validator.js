export default class Validator {
  static isGreater(value, min) {
    return value >= min;
  }

  static isdivided(value, division) {
    return value % division === 0;
  }

  static isDuplicated(array, key, value) {
    return array.some(el => el[key] === value);
  }
}

