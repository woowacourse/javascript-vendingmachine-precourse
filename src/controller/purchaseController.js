import { $ } from '../utils/dom.js';
import { store, userInputMoney, items, reservedChange, returnedChange } from '../model/store.js';
import PurchaseValidator from '../validator/purchaseValidator.js';
import { COIN, PURCHASE } from '../constants/index.js';

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
    purchasedItem.quantity -= PURCHASE.ONE_OF_ITEM;
    store.setLocalStorage('userInputMoney', userInputMoney);
    store.setLocalStorage('items', items);
  }

  returnChange() {
    this.calculateReturnChange();
    store.setLocalStorage('returnedChange', returnedChange);
    store.setLocalStorage('userInputMoney', userInputMoney);
    store.setLocalStorage('reservedChange', reservedChange);
    this.view.render();
  }

  calculateReturnChange() {
    [COIN.VALUE_500, COIN.VALUE_100, COIN.VALUE_50, COIN.VALUE_10].forEach((value) => {
      const quotient = parseInt(userInputMoney.amount / value);
      const returnableChange = reservedChange[`coin${value}`];
      if (quotient >= returnableChange) {
        this.returnReturnableCountsCoin({ returnableChange, value });
        return;
      }
      this.returnMaximumCountsCoin({ quotient, value });
    });
  }

  returnReturnableCountsCoin({ returnableChange, value }) {
    userInputMoney.amount -= returnableChange * value;
    returnedChange[`coin${value}`] = returnableChange;
    reservedChange[`coin${value}`] -= returnableChange;
  }

  returnMaximumCountsCoin({ quotient, value }) {
    userInputMoney.amount -= quotient * value;
    returnedChange[`coin${value}`] = quotient;
    reservedChange[`coin${value}`] -= quotient;
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
