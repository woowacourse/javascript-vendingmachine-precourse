import { $ } from '../utils/dom.js';
import { userInputMoney } from '../model/store.js';

class PurhcaseController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  addUserInputMoney() {
    const moneyInput = this.view.getInput();
    userInputMoney.totalAmount += moneyInput;
    this.view.render();
  }

  bindEvent() {
    $('#charge-button').addEventListener('click', this.addUserInputMoney.bind(this));
  }
}

export default PurhcaseController;
