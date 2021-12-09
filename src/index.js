import { $ } from './utils/dom.js';
import { SELECTOR } from './constants.js';

class VendingMachine {
  constructor() {
    this.initDOM();
  }

  initDOM() {
    this.initHeader();
  }

  initHeader() {
    const h1 = document.createElement('h1');
    h1.textContent = '🥤자판기🥤';
    $(`#${SELECTOR.vendingMachineApp}`).appendChild(h1);
  }
}

new VendingMachine();
