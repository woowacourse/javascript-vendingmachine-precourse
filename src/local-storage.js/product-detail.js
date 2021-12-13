import { PRODUCT } from '../common/constants/constants.js';

export const saveItemsToStorage = function (
  productNameValue,
  productPriceValue,
  productQuantityValue
) {
  let newProduct = {}; // 추가할 값

  newProduct.name = productNameValue;
  newProduct.price = productPriceValue;
  newProduct.quantity = productQuantityValue;

  // localStorage 저장된 값을 분해해서
  let prevProductList = JSON.parse(localStorage.getItem(PRODUCT.LIST));
  if (prevProductList === null) {
    prevProductList = [];
  }

  let finalProductList = prevProductList.concat(newProduct);

  localStorage.setItem(PRODUCT.LIST, JSON.stringify(finalProductList));
};
