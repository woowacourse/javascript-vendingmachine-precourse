import View from '../view/view.js';
import { Inventory } from './inventory.js';
import { Money } from './money.js';
import Product from '../model/product.js';
import ProductList from '../model/productList.js';

export class Controller {
  constructor() {
    this.productList = new ProductList();
    this.productList.updateProducts();
    this.inventory = new Inventory(this.productList);
    this.money = new Money();
    this.view = new View(this);
  }

  addProduct(name, price, quantity) {
    const product = new Product(name, price, quantity);
    this.inventory.addProduct(product);
    this.inventory.showProductList(this.view.managePage);
  }
}