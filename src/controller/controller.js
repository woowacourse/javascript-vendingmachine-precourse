import { DISPLAY } from '../common/constants/constants.js';
import { $ } from '../common/dom/dom.js';

const productManageButtonEvent = () => {
  const $productAddMenuButton = $('#product-add-menu');

  $productAddMenuButton.addEventListener('click', () => {
    const $app = $('#app');
    const appNodes = $app.childNodes;

    appNodes[1].style.display = DISPLAY.BLOCK;
    appNodes[2].style.display = DISPLAY.NONE;
    appNodes[3].style.display = DISPLAY.NONE;
  });
};
const VendingManageButtonEvent = () => {
  const $vendingMachineButton = $('#vending-machine-manage-menu');

  $vendingMachineButton.addEventListener('click', () => {
    const $app = $('#app');
    const appNodes = $app.childNodes;

    appNodes[1].style.display = DISPLAY.NONE;
    appNodes[2].style.display = DISPLAY.BLOCK;
    appNodes[3].style.display = DISPLAY.NONE;
  });
};
const productPurchaseButtonEvent = () => {
  const $purchaseMenuButton = $('#product-purchase-menu');

  $purchaseMenuButton.addEventListener('click', () => {
    const $app = $('#app');
    const appNodes = $app.childNodes;

    appNodes[1].style.display = DISPLAY.NONE;
    appNodes[2].style.display = DISPLAY.NONE;
    appNodes[3].style.display = DISPLAY.BLOCK;
  });
};

export const bindButtonEventListener = () => {
  productManageButtonEvent();
  VendingManageButtonEvent();
  productPurchaseButtonEvent();
};
