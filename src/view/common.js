import { $ } from '../utils/dom.js';
import { SELECTOR } from '../constants.js';

export const createVendingMachineHeader = () => {
  const h1 = document.createElement('h1');
  h1.textContent = '🥤자판기🥤';
  $(`#${SELECTOR.vendingMachineApp}`).appendChild(h1);
};
