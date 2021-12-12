import Item from '../model/item.js';
import { items } from '../model/store.js';
import { $ } from '../utils/dom.js';

class ManageController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  addItem() {
    const { name, price, quantity } = this.view.getInput();
    const newItem = new Item(name, price, quantity);
    items.push(newItem);
    console.log(items);
  }

  bindEvent() {
    $('#product-add-button').addEventListener('click', this.addItem.bind(this));
  }
}

export default ManageController;
