import { ID } from '../constant/attributes.js';
import { validateProduct } from '../utils/validate.js';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.renderAddProduct(this.model.menu);
    this.addEvents();
  }

  addEvents() {
    document.getElementById(ID.MENU.CONTAINER).addEventListener('click', this.tabChoice.bind(this));
    document
      .getElementById(ID.PRODUCT.ADD_BUTTON)
      .addEventListener('click', this.addItem.bind(this));
  }

  tabChoice(e) {
    switch (e.target.id) {
      case ID.MENU.ADD:
        this.view.renderAddProduct(this.model.menu);
        break;
      case ID.MENU.CHANGE:
        this.view.renderChange(this.model.money, this.model.coinsArr);
        break;
      default:
    }
  }

  addItem(event) {
    event.preventDefault();
    const name = document.getElementById(ID.PRODUCT.NAME_INPUT).value;
    const price = Number(document.getElementById(ID.PRODUCT.PRICE_INPUT).value);
    const quantity = Number(document.getElementById(ID.PRODUCT.QUANTITY_INPUT).value);
    const list = this.model.names;
    const error = validateProduct({ name, price, quantity, list });
    if (error) {
      return this.view.report(error);
    }
    this.model.addMenu({ name, price, quantity });
    this.view.addItem({ name, price, quantity });
  }
}
