import { vendingMachine } from '../index.js';
import { PRODUCTS } from '../constants/key.js';

export const saveProductList = productList =>
  localStorage.setItem(PRODUCTS, JSON.stringify(productList));

const loadProductList = () => {
  const products = JSON.parse(localStorage.getItem(PRODUCTS));

  return !products ? [] : products;
};

export const initProductList = () => {
  vendingMachine.products = loadProductList();
};
