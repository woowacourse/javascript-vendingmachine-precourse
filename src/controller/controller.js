import { $ } from '../dom/dom.js';

const productManageButtonEvent = () => {
  const $productAddMenuButton = $('#product-add-menu');

  $productAddMenuButton.addEventListener('click', () => {
    const $app = $('#app');
    const appNodes = $app.childNodes;

    appNodes[1].style.display = 'block';
    appNodes[2].style.display = 'none';
    appNodes[3].style.display = 'none';
  });
};
const VendingManageButtonEvent = () => {
  const $vendingMachineButton = $('#vending-machine-manage-menu');

  $vendingMachineButton.addEventListener('click', () => {
    const $app = $('#app');
    const appNodes = $app.childNodes;

    appNodes[1].style.display = 'none';
    appNodes[2].style.display = 'block';
    appNodes[3].style.display = 'none';
  });
};
const productPurchaseButtonEvent = () => {
  const $purchaseMenuButton = $('#product-purchase-menu');

  $purchaseMenuButton.addEventListener('click', () => {
    const $app = $('#app');
    const appNodes = $app.childNodes;

    appNodes[1].style.display = 'none';
    appNodes[2].style.display = 'none';
    appNodes[3].style.display = 'block';
  });
};

export const bindButtonEventListener = () => {
  productManageButtonEvent();
  VendingManageButtonEvent();
  productPurchaseButtonEvent();
};
