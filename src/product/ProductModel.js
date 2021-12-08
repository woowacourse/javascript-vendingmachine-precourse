export default class ProductModel {
  constructor() {
    this.products = [];
  }

  getProducts = () => {
    return this.products;
  };

  addProduct = ({ name, price, quantity }) => {
    this.products.push({ name, price, quantity });
  };
}
