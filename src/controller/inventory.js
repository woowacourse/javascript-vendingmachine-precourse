import Validation from '../utils/validation.js';
import { ERROR } from '../utils/constant.js';
import View from '../view/view.js';

export class Inventory {
  constructor() {
    this.valid = new Validation();
    this.view = new View(this);
  }

  saveItem(name, price, quantity) {
    const isValid = this.valid.checkManageInput(name, price, quantity)
    if(isValid) {
      localStorage.setItem(name, `${price}-${quantity}`);
      this.view.managePage.attachNewProduct(name, price, quantity);
    } else {
      alert(ERROR.MANAGEINPUT);
    }
  }
}
