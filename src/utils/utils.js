import { REGEX } from './constants.js';

const utils = {
  isBlank: string => {
    return string.length === 0;
  },

  isIncludeSpace: string => {
    return REGEX.IS_INCLUDE_SPACE.test(string);
  },

  hasSpecial: string => {
    return string.split('').some(char => REGEX.HAS_SPECIAL.test(char));
  },

  isUnderHundred: string => {
    return Number(string) < 100;
  },
};

export default utils;
