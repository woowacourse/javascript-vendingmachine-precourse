export default {
  products: JSON.parse(localStorage.getItem('products'))
    ? JSON.parse(localStorage.getItem('products'))
    : [],
  add(product) {
    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products));
  },
  list() {
    return this.products;
  },
};
