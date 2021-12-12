import Item from '../model/item.js';
import { $ } from '../utils/dom.js';

class ManageController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  addItem() {
    const { name, price, quantity } = this.view.getInput();
    const newItem = new Item(name, price, quantity);
    console.log(newItem);
  }

  bindEvent() {
    $('#product-add-button').addEventListener('click', this.addItem.bind(this));
  }
}

export default ManageController;
