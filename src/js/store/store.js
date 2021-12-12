import { localStorageConstants } from '../constant/localstorage.js';
import { DECIMAL } from '../constant/constant.js';

export const store = {
  getItem(key) {
    if (key === localStorageConstants.MENU) {
      return JSON.parse(localStorage.getItem(key));
    }
    if (localStorage.getItem(key) !== null) {
      return parseInt(JSON.parse(localStorage.getItem(key)), DECIMAL);
    } else {
      return null;
    }
  },
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
