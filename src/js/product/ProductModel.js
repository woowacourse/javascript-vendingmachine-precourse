export default class ProductModel {
  constructor() {
    this.products = [];
  }

  getProducts = () => {
    return this.products;
  };

  addProduct = ({ name, price, quantity }) => {
    if (this.isExsitName(name)) {
      const idx = this.findProductIdx(name);
      this.products.splice(idx, 1, { name, price, quantity });
    } else {
      this.products.push({ name, price, quantity });
    }
  };

  findProduct = (name) => {
    return this.products.find((product) => product.name === name);
  };

  findProductIdx = (name) => {
    return this.products.findIndex((product) => product.name === name);
  };

  isExsitName = (name) => {
    return this.findProductIdx(name) !== -1;
  };
}
