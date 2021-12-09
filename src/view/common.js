import { $ } from '../utils/dom.js';
import { SELECTOR, TAB_BUTTONS } from '../constants.js';

export const createVendingMachineHeader = () => {
  const h1 = document.createElement('h1');
  h1.textContent = '🥤자판기🥤';
  $(`#${SELECTOR.vendingMachineApp}`).appendChild(h1);
};

export const createTabButtons = () => {
  const tabContainer = document.createElement('div');

  TAB_BUTTONS.forEach(button => {
    const buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.textContent = button.text;
    buttonElement.id = button.id;
    tabContainer.appendChild(buttonElement);
  });

  $(`#${SELECTOR.vendingMachineApp}`).appendChild(tabContainer);
};
