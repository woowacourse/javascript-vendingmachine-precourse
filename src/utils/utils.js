import { REGEX } from './constants.js';
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
    return DB.load('inventory').some(product => product.name === string);
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

  changeIdToComponent: string => {
    const result = string.split('-');
    result.pop();
    result.push('component');

    return '#' + result.join('-');
  },

  calculateToCharge: string => {
    return Object.entries(DB.load(string))
      .map(array => {
        const [coinType, quantity] = array;

        return coinType.replace(REGEX.HAS_NUMBER, '') * quantity;
      })
      .reduce((previous, current) => previous + current);
  },

  insertAt: (string, index, target) => {
    return string.slice(0, index) + target + string.slice(index);
  },

  convertStringToIncludingHyphen: string => {
    return Object.entries(DB.load(string)).map(array => {
      const [coinType, quantity] = array;

      return [utils.insertAt(coinType, 4, '-'), quantity];
    });
  },

  addPurchaseButtonEvent: element => {
    element.addEventListener('click', e => {
      e.preventDefault();

      const data = utils.getProductInformation(e.path[2].children);

      console.log(data);
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
};

export default utils;
