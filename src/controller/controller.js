import View from '../view/view.js';
import { Inventory } from './inventory.js';
import { Money } from './money.js';
import Product from '../model/product.js';
import ProductList from '../model/productList.js';
import MoneyBank from '../model/moneybank.js';
import { VendingMachine } from './vendingMachine.js';

export class Controller {
  constructor() {
    this.productList = new ProductList();
    this.productList.updateProducts();
    this.moneyBank = new MoneyBank();
    this.moneyBank.updateAll();
    this.inventory = new Inventory(this.productList);
    this.money = new Money(this.moneyBank);
    this.vendingMachine = new VendingMachine(this.moneyBank, this.productList);
    this.view = new View(this);
  }

  addProduct(name, price, quantity) {
    const product = new Product(name, price, quantity);
    this.inventory.addProduct(product);
    this.inventory.showProductList(this.view.managePage);
    this.view.purchasePage.showProductListAll(this.productList.products);
  }

  chargeMoney(money) {
    this.money.chargeMoney(money);
    this.money.showCurrentMoney(this.view.chargePage);
    this.money.showCurrentCoins(this.view.chargePage);
  }

  insertMoney(money) {
    this.vendingMachine.insertMoney(money);
    this.vendingMachine.showInsertedMoney(this.view.purchasePage);
  }

  returnMoney(money) {
    this.vendingMachine.returnMoney(money, this.view.purchasePage);
    this.vendingMachine.showInsertedMoney(this.view.purchasePage);
    this.money.showCurrentMoney(this.view.chargePage);
    this.money.showCurrentCoins(this.view.chargePage);
  }

  purchase(productName) {
    this.vendingMachine.purchase(productName, this.view.purchasePage);
    this.inventory.showProductList(this.view.managePage);
    this.money.showCurrentMoney(this.view.chargePage);
    this.money.showCurrentCoins(this.view.chargePage);
  }
}