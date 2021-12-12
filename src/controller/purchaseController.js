import { $ } from '../utils/dom.js';
import { store, userInputMoney, items } from '../model/store.js';
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
    userInputMoney.totalAmount -= purchasedItem.price;
    purchasedItem.quantity -= 1;
    store.setLocalStorage('userInputMoney', userInputMoney);
    store.setLocalStorage('items', items);
  }

  bindEvent() {
    $('#charge-button').addEventListener('click', this.addUserInputMoney.bind(this));
    $('#purchase-list').addEventListener('click', (e) => {
      if (!e.target.classList.contains('purchase-button')) {
        return;
      }
      this.purchaseItem(e);
    });
  }
}

export default PurhcaseController;
