import VendingMachine from "./controller/vendingMachine.js";

class App {
  constructor() {
    this.init();
  }

  init() {
    new VendingMachine();
  }
}

new App();
