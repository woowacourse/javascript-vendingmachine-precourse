import { $ } from '../utils/dom.js';
import { store, userInputMoney } from '../model/store.js';
import PurchaseValidator from '../utils/purchaseValidator.js';

class PurhcaseController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  addUserInputMoney() {
    const moneyInput = this.view.getInput();
    if (PurchaseValidator.isInvalidMoneyInput(moneyInput)) {
      return;
    }
    userInputMoney.totalAmount += moneyInput;
    store.setLocalStorage('userInputMoney', userInputMoney);
    this.view.render();
  }

  bindEvent() {
    $('#charge-button').addEventListener('click', this.addUserInputMoney.bind(this));
  }
}

export default PurhcaseController;
