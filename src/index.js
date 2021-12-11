import $ from './utils/selector.js';

function vendingMachine() {
  this.state = {
    menu: {
      addMenuTab: [],
      changeTab: [],
      purchaseTab: [],
    },
  };

  this.render = () => {};

  this.setState = newState => {
    this.state = { ...this.state, ...newState };
    this.render();
  };

  this.init = () => {
    this.initEventListeners();
  };
  this.initEventListeners = () => {};
}

const machine = new vendingMachine();
machine.init();
