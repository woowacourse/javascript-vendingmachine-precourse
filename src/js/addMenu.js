import { NUM } from './constant/constant.js';
import { $ } from './util/dom.js';
import store from './store/store.js';
import { renderProductItems } from './render.js';

export const addMenu = e => {
  e.preventDefault();
  const menuName = $('#product-name-input').value;
  const menuPrice = $('#product-price-input').value;
  const menuQuantity = $('#product-quantity-input').value;
  if (
    checkBlank(menuName) ||
    checkMenuPrice(menuPrice) ||
    checkMenuQuantity(menuQuantity)
  ) {
    window.alert('잘못된 값을 입력하셨습니다.');
  } else {
    let menu = [];
    let items = store.getLocalStorage();
    if (items !== null) {
      for (let item in items) {
        menu.push(items[item]);
      }
    }
    menu.push({ name: menuName, price: menuPrice, quantity: menuQuantity });
    console.log(menu);
    store.setLocalStorage(menu);
    renderProductItems();
  }
};

export const checkMenuPrice = menuPrice => {
  return (
    checkBlank(menuPrice) ||
    checkNotNum(menuPrice) ||
    checkMenuPriceRange(menuPrice) ||
    checkMenuPriceDivideTen(menuPrice)
  );
};
export const checkMenuQuantity = menuQuantity => {
  return (
    checkBlank(menuQuantity) ||
    checkNotNum(menuQuantity) ||
    checkMenuQuantityRange(menuQuantity)
  );
};

export const checkBlank = inputValue => {
  return inputValue === '';
};
export const checkNotNum = inputValue => {
  const inputValueToArray = inputValue.split('');
  let checkNum = inputValueToArray.filter(x => NUM.includes(parseInt(x, 10)));
  return !(checkNum.length === inputValueToArray.length);
};
export const checkMenuPriceRange = menuPrice => {
  return parseInt(menuPrice, 10) < 100;
};
export const checkMenuPriceDivideTen = menuPrice => {
  return parseInt(menuPrice, 10) % 10 !== 0;
};
export const checkMenuQuantityRange = menuQuantity => {
  return parseInt(menuQuantity, 10) < 1;
};
