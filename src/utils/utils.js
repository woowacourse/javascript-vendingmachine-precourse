import { REGEX } from '../constants/constants.js';
import { STORAGE } from '../constants/constants.js';
import { default as DB } from '../model/database.js';

const utils = {
  isBlank: string => {
    return string.length === 0;
  },

  isExist: array => {
    return array.length > 0;
  },

  isIncludeSpace: string => {
    return REGEX.IS_INCLUDE_SPACE.test(string);
  },

  isDuplacted: string => {
    return DB.load(STORAGE.INVENTORY.NAME).some(product => product.name === string);
  },

  hasSpecial: string => {
    return string.split('').some(char => REGEX.HAS_SPECIAL.test(char));
  },

  isUnder: (string, comparisonNumber) => {
    return Number(string) < comparisonNumber;
  },

  isNotTenMultiple: string => {
    return Number(string) % 10 !== 0;
  },

  isZero: string => {
    return Number(string) === 0;
  },

  isAllZero: string => {
    return Object.values(DB.load(string)).every(number => number === 0);
  },

  isChargeUnderProductPrice: number => {
    return number > DB.load(STORAGE.CHARGE.NAME);
  },

  changeIdToComponent: string => {
    const result = string.split('-');
    result.pop();
    result.push('component');

    return '#' + result.join('-');
  },

  calculateToCharge: object => {
    return Object.entries(object)
      .map(array => {
        const [coinType, quantity] = array;

        return coinType.replace(REGEX.HAS_NUMBER, '') * quantity;
      })
      .reduce((previous, current) => previous + current);
  },

  insertAt: (string, index, target) => {
    return string.slice(0, index) + target + string.slice(index);
  },

  insertHypen: object => {
    return Object.entries(object).map(array => {
      const [coinType, quantity] = array;

      return [utils.insertAt(coinType, 4, '-'), quantity];
    });
  },

  getProductInformation: element => {
    const [name, price, quantity] = Array.from(element);

    return {
      name: name.dataset.productName,
      price: price.dataset.productPrice,
      quantity: quantity.dataset.productQuantity,
    };
  },

  updateAddedCharge: string => {
    const charge = DB.load(STORAGE.CHARGE.NAME);

    DB.overwrite(STORAGE.CHARGE.NAME, charge + Number(string));
  },

  updateDeductedCharge: object => {
    const charge = DB.load(STORAGE.CHARGE.NAME);

    DB.overwrite(STORAGE.CHARGE.NAME, charge - object.price);
  },

  updateDeductedProductQuantity: data => {
    const newObject = DB.load(STORAGE.INVENTORY.NAME).map(object => {
      if (object.name === data.name) object.quantity -= 1;
      return object;
    });

    DB.overwrite(STORAGE.INVENTORY.NAME, newObject);
  },
};

export default utils;
