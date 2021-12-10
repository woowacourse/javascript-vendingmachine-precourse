import { REGEX } from './constants.js';
import { default as DB } from '../model/database.js';

const utils = {
  isBlank: string => {
    return string.length === 0;
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

  isUnderHundred: string => {
    return Number(string) < 100;
  },

  isNotTenMultiple: string => {
    return Number(string) % 10 !== 0;
  },

  isZero: string => {
    return Number(string) === 0;
  },

  changeIdToComponent: string => {
    const result = string.split('-');
    result.pop();
    result.push('component');

    return '#' + result.join('-');
  },
};

export default utils;
