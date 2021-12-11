import $ from './utils/selector.js';

function vendingMachine() {
  this.init = () => {
    this.initEventListeners();
  };
  this.initEventListeners = () => {};
}

const machine = new vendingMachine();
machine.init();
