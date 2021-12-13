import View from "../view/view.js";
import VendingMachine from "../model/vendingMachine.js";

export default class Controller {
  constructor() {
    this.vendingMachine = "";
    this.view = "";
  }

  init() {
    this.view = new View();
  }
}
