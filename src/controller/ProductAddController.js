import Item from "../model/ProductAddModel.js";
import { items, store } from "../model/store.js";
import { $ } from "../common/dom.js";

class ProductAddController {
  constructor(view) {
    this.view = view;
    this.onBindClickEvent();
  }

  initInput() {
    $("#product-name-input").value = "";
    $("#product-price-input").value = "";
    $("#product-quantity-input").value = "";
  }

  getInput() {
    return {
      name: $("#product-name-input").value,
      price: +$("#product-price-input").value,
      quantity: +$("#product-quantity-input").value,
    };
  }

  addItem() {
    const { name, price, quantity } = this.getInput();
    const newItem = new Item(this.getInput());
    items.push(newItem);
    store.setStore("items", items);
    this.view.render();
    this.initInput();
  }

  onBindClickEvent() {
    $("#product-add-button").addEventListener("click", this.addItem.bind(this));
  }
}

export default ProductAddController;
