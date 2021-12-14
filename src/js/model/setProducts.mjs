export const products = JSON.parse(localStorage.getItem('products')) ?? [];

export function addProduct(item) {
  products.push(item);
  localStorage.setItem('products', JSON.stringify(products));
}
