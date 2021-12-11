import { DOM_ID_SELECTOR } from '../constants.js';
import initializeContentComponent from '../utils/initializeContentComponent.js';

const attachProductAddMenuClickEvent = (vendingMachine) => {
  const $productAddMenu = document.getElementById(DOM_ID_SELECTOR.productAddMenu);
  $productAddMenu.addEventListener('click', () => {
    initializeContentComponent(DOM_ID_SELECTOR.productAddMenu, vendingMachine);
  });
};

const attachVendingMachineManageMenuClickEvent = (vendingMachine) => {
  const $vendingMachineManageMenu = document.getElementById(DOM_ID_SELECTOR.vendingMachineManageMenu);
  $vendingMachineManageMenu.addEventListener('click', () => {
    initializeContentComponent(DOM_ID_SELECTOR.vendingMachineManageMenu, vendingMachine);
  });
};

const attachProductPurchaseMenuClickEvent = (vendingMachine) => {
  const $productPurchaseMenu = document.getElementById(DOM_ID_SELECTOR.productPurchaseMenu);
  $productPurchaseMenu.addEventListener('click', () => {
    initializeContentComponent(DOM_ID_SELECTOR.productPurchaseMenu, vendingMachine);
  });
};

const attachMenuTabEvent = (vendingMachine) => {
  attachProductAddMenuClickEvent(vendingMachine);
  attachVendingMachineManageMenuClickEvent(vendingMachine);
  attachProductPurchaseMenuClickEvent(vendingMachine);
};

export default attachMenuTabEvent;
