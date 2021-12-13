import View from '../view/view.js';
import { Inventory } from './inventory.js';
import { Money } from './money.js';
import Product from '../model/product.js';
import ProductList from '../model/productList.js';
import Coin from '../model/coin.js';
import MoneyBank from '../model/moneybank.js';

export class Controller {
  constructor() {
    this.productList = new ProductList();
    this.productList.updateProducts();
    this.moneyBank = new MoneyBank();
    this.moneyBank.updateMoney();
    this.inventory = new Inventory(this.productList);
    this.money = new Money(this.moneyBank);
    this.view = new View(this);
  }

  addProduct(name, price, quantity) {
    const product = new Product(name, price, quantity);
    this.inventory.addProduct(product);
    this.inventory.showProductList(this.view.managePage);
  }

  chargeMoney(money) {
    this.money.chargeMoney(money);
    this.money.showCurrentMoney(this.view.chargePage);
  }
}