import { $ } from '../utils/dom.js';
import { SELECTOR, TAB_BUTTONS } from '../constants.js';

export const createVendingMachineHeader = () => {
  const h1 = document.createElement('h1');
  h1.textContent = '🥤자판기🥤';
  $(`#${SELECTOR.vendingMachineApp}`).appendChild(h1);
};

export const createTabButtons = () => {
  const tabContainer = document.createElement('div');
  tabContainer.id = SELECTOR.tabButtonContainerId;

  TAB_BUTTONS.forEach(button => {
    const buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.textContent = button.text;
    buttonElement.id = button.id;
    tabContainer.appendChild(buttonElement);
  });

  $(`#${SELECTOR.vendingMachineApp}`).appendChild(tabContainer);
};

export const createTabContentContainer = () => {
  const tabContentContainer = document.createElement('div');
  tabContentContainer.id = SELECTOR.tabContentContainerId;
  $(`#${SELECTOR.vendingMachineApp}`).appendChild(tabContentContainer);
};
