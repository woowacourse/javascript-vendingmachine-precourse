import ProductAddMenuView from "./views/ProductAddMenuView.js";

export default class Menu {
  constructor() {
    this.view = new ProductAddMenuView();
  }

  initialize() {
    this.view.render();
  }
}
