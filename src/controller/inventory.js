import Validation from '../utils/validation.js';
import { ERROR } from '../utils/constant.js';

export class Inventory {
  constructor() {
    this.valid = new Validation();
  }

  addProduct(name, price, quantity, view) {
    const isValid = this.valid.checkManageInput(name, price, quantity)
    if(isValid) {
      localStorage.setItem(name, `${price}-${quantity}`);
      view.attachNewProduct(name, price, quantity);
    } else {
      alert(ERROR.MANAGEINPUT);
    }
  }
}
