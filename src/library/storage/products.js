import { getItem, setItem } from './utils/index.js';

const KEY_PRODUCTS = 'products';

export function getProducts() {
  return getItem(KEY_PRODUCTS) || [];
}

export function setProducts(products) {
  setItem(
    KEY_PRODUCTS,
    products.filter((product) => product.quantity !== 0)
  );
}

export function addProduct(product) {
  setProducts([...getProducts(), product]);
}

export function clearProducts() {
  localStorage.removeItem(KEY_PRODUCTS);
}

export function findIndexOfProduct(productName) {
  return getProducts().findIndex((product) => product.name === productName);
}

export function sellProduct(productName) {
  const products = getProducts();
  products[findIndexOfProduct(productName)].quantity -= 1;
  setProducts(products);
}
