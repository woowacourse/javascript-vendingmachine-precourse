import { getProductInput } from '../user.js';
import Product from './product.js';
import { saveProductList } from '../localStorage/products.js';
import { updateProductTable } from '../dom/control/updateProductTable.js';

export default class VendingMachine {
  constructor() {
    this.products = [];
  }

  addProduct() {
    const productInput = getProductInput();

    if (!productInput) {
      return;
    }

    const newProduct = Product.createProduct(productInput);

    this.products.push(newProduct);
    saveProductList(this.products);
    updateProductTable([newProduct]);
  }
}
