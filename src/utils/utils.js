import { REGEX } from './constants.js';

const utils = {
  isBlank: string => {
    return string.length === 0;
  },

  isIncludeSpace: string => {
    return REGEX.IS_INCLUDE_SPACE.test(string);
  },
};

export default utils;
