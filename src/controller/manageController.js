import Item from '../model/item.js';
import { items, store } from '../model/store.js';
import ManageValidator from '../validator/manageValidator.js';
import { $ } from '../utils/dom.js';

class ManageController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  addItem() {
    const { name, price, quantity } = this.view.getInput();
    if (ManageValidator.isInvalidAddItemInput({ name, price, quantity })) {
      return;
    }
    const newItem = new Item(name, price, quantity);
    items.push(newItem);
    store.setLocalStorage('items', items);
    this.view.render();
  }

  bindEvent() {
    $('#product-add-button').addEventListener('click', this.addItem.bind(this));
  }
}

export default ManageController;
