import View from '../view/view.js';
import { Inventory } from './inventory.js';
import { Money } from './money.js';

export class Controller {
  constructor() {
    this.inventory = new Inventory();
    this.money = new Money();
    this.view = new View(this);
  }

  addProduct(name, price, quantity) {
    this.inventory.addProduct(name, price, quantity,this.view.managePage);
  }
}