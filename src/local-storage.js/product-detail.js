import { PRODUCT } from '../common/constants/constants.js';

export const saveItemsToStorage = function (
  productNameValue,
  productPriceValue,
  productQuantityValue
) {
  let newProduct = {};

  newProduct.name = productNameValue;
  newProduct.price = productPriceValue;
  newProduct.quantity = productQuantityValue;

  let prevProductList = JSON.parse(localStorage.getItem(PRODUCT.LIST));

  if (prevProductList === null) {
    prevProductList = [];
  }

  let finalProductList = prevProductList.concat(newProduct);

  localStorage.setItem(PRODUCT.LIST, JSON.stringify(finalProductList));
};
