import { $ } from '../utils/dom.js';
import { store, userInputMoney, items, change, returnedChange } from '../model/store.js';
import PurchaseValidator from '../validator/purchaseValidator.js';

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
    userInputMoney.amount += moneyInput;
    store.setLocalStorage('userInputMoney', userInputMoney);
    this.view.render();
  }

  purchaseItem(e) {
    const purchasedItemName = e.target.closest('tr').querySelector('td').dataset.productName;
    const purchasedItem = items.find((item) => item.name === purchasedItemName);
    const { price, quantity } = purchasedItem;
    if (PurchaseValidator.isNotPurchasable({ price, quantity, userInputMoney })) {
      return;
    }
    this.updateItemState(purchasedItem);
    this.view.render();
  }

  updateItemState(purchasedItem) {
    userInputMoney.amount -= purchasedItem.price;
    purchasedItem.quantity -= 1;
    store.setLocalStorage('userInputMoney', userInputMoney);
    store.setLocalStorage('items', items);
  }

  returnChange() {
    this.calculateReturnChange();
    store.setLocalStorage('returnedChange', returnedChange);
    store.setLocalStorage('userInputMoney', userInputMoney);
    store.setLocalStorage('change', change);
    this.view.render();
  }

  calculateReturnChange() {
    [500, 100, 50, 10].forEach((value) => {
      const maxReturnChange = parseInt(userInputMoney.amount / value);
      const availableReturnChange = change[`coin${value}`];
      if (maxReturnChange >= availableReturnChange) {
        userInputMoney.amount -= change[`coin${value}`] * value;
        returnedChange[`coin${value}`] = change[`coin${value}`];
        change[`coin${value}`] -= change[`coin${value}`];
      } else {
        userInputMoney.amount -= maxReturnChange * value;
        returnedChange[`coin${value}`] = maxReturnChange;
        change[`coin${value}`] -= maxReturnChange;
      }
    });
  }

  bindEvent() {
    $('#charge-button').addEventListener('click', this.addUserInputMoney.bind(this));
    $('#coin-return-button').addEventListener('click', this.returnChange.bind(this));
    $('#purchase-list').addEventListener('click', (e) => {
      if (!e.target.classList.contains('purchase-button')) {
        return;
      }
      this.purchaseItem(e);
    });
  }
}

export default PurhcaseController;
