import { PRODUCT } from '../common/constants/constants.js';
import { printItemsToScreen } from '../controller/product-manage/print-list-to-screen.js';
import { printProductItemsToPurchaseToScreen } from '../controller/product-purchase/print-to-screen.js';
import { createProductListTable } from '../view/show.js';

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

export const getItemsFromStorage = () => {
  createProductListTable();
  printItemsToScreen();
  printProductItemsToPurchaseToScreen();
};
