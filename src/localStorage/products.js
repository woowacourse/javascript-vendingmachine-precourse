import { vendingMachine } from '../index.js';
import { createProductTableRow } from '../dom/control/updateProductTable.js';

export const saveProductList = (productList) => {
  localStorage.setItem('products', JSON.stringify(productList));
};

export const loadProductList = () => {
  const products = JSON.parse(localStorage.getItem('products'));

  return !products ? [] : products;
};

export const initProductList = () => {
  vendingMachine.products = loadProductList();
  createProductTableRow(vendingMachine.products);
};
