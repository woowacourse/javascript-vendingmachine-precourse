import { NUM } from './constant/constant.js';
import { $ } from './util/dom.js';

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
  }
};

const checkMenuPrice = menuPrice => {
  return (
    checkBlank(menuPrice) ||
    checkNotNum(menuPrice) ||
    checkMenuPriceRange(menuPrice) ||
    checkMenuPriceDivideTen(menuPrice)
  );
};
const checkMenuQuantity = menuQuantity => {
  return (
    checkBlank(menuQuantity) ||
    checkNotNum(menuQuantity) ||
    checkMenuQuantityRange(menuQuantity)
  );
};

const checkBlank = inputValue => {
  return inputValue === '';
};
const checkNotNum = inputValue => {
  const inputValueToArray = inputValue.split('');
  let checkNum = inputValueToArray.filter(x => NUM.includes(parseInt(x, 10)));
  return !(checkNum.length === inputValueToArray.length);
};
const checkMenuPriceRange = menuPrice => {
  return parseInt(menuPrice, 10) < 100;
};
const checkMenuPriceDivideTen = menuPrice => {
  return parseInt(menuPrice, 10) % 10 !== 0;
};
const checkMenuQuantityRange = menuQuantity => {
  return parseInt(menuQuantity, 10) < 1;
};
