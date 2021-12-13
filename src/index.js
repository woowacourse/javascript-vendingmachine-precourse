import { $ } from './utils/querySelector.js';
import { initScreenTemplate } from './utils/initScreenTemplate.js';
import { showProductAddMenu } from './components/manage/productAddMenu.js';
import { showManageMenu } from './components/charge/coinCharge.js';
import { showProductPurchaseMenu } from './components/purchase/productPurchase.js';

const init = () => {
  $('#app').innerHTML = initScreenTemplate;

  $('#product-add-menu').addEventListener('click', showProductAddMenu);
  $('#vending-machine-manage-menu').addEventListener('click', showManageMenu);
  $('#product-purchase-menu').addEventListener('click', showProductPurchaseMenu);
};

export default function vendingMachineApp() {
  init();
}

window.addEventListener('DOMContentLoaded', () => {
  vendingMachineApp();
});
