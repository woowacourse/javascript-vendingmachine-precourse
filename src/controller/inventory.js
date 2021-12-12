import Validation from '../utils/validation.js';
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
      alert('입력 값이 올바르지 않습니다.');
    }
  }
}
