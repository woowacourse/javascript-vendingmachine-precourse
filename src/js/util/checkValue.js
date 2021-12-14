// prettier-ignore
import { DECIMAL, NUM, MIN_MENU_PRICE, MIN_MENU_QUANTITY } from '../constant/constant.js';
import { localStorageConstants } from '../constant/localstorage.js';
import { store } from '../store/store.js';

export const check = {
  menuCorrect(menuTemplate) {
    return (
      check.menuName(menuTemplate.name) ||
      check.menuPrice(menuTemplate.price) ||
      check.menuQuantity(menuTemplate.quantity)
    );
  },

  menuName(menuName) {
    return (
      check.inputValueBlank(menuName) || check.menuNameDuplication(menuName)
    );
  },

  menuPrice(menuPrice) {
    return (
      check.inputValueBlank(menuPrice) ||
      check.inputValueNotNum(menuPrice) ||
      check.inputValueRange(menuPrice, MIN_MENU_PRICE) ||
      check.inputValueDivideTen(menuPrice)
    );
  },

  menuQuantity(menuQuantity) {
    return (
      check.inputValueBlank(menuQuantity) ||
      check.inputValueNotNum(menuQuantity) ||
      check.inputValueRange(menuQuantity, MIN_MENU_QUANTITY)
    );
  },

  menuNameDuplication(inputValue) {
    let menus = store.getItem(localStorageConstants.MENU);
    for (let menu in menus) {
      if (menus[menu].name === inputValue) {
        return true;
      }
    }
  },

  inputValueBlank(inputValue) {
    return inputValue === '';
  },

  inputValueNotNum(inputValue) {
    const inputValueToArray = inputValue.split('');
    let checkNum = inputValueToArray.filter(x =>
      NUM.includes(parseInt(x, DECIMAL)),
    );
    return !(checkNum.length === inputValueToArray.length);
  },

  inputValueRange(inputValue, minValue) {
    return parseInt(inputValue, 10) < minValue;
  },

  inputValueDivideTen(inputValue) {
    return parseInt(inputValue, 10) % 10 !== 0;
  },
};
