import { $ } from './utils/querySelector.js';
import { initScreenTemplate } from './utils/initScreenTemplate.js';
import { showProductManage } from './components/manage/productAddMenu.js';
import { showCoinCharge } from './components/charge/coinCharge.js';
import { showProductPurchase } from './components/purchase/productPurchase.js';

const init = () => {
  $('#app').innerHTML = initScreenTemplate;

  $('#product-add-menu').addEventListener('click', showProductManage);
  $('#vending-machine-manage-menu').addEventListener('click', showCoinCharge);
  $('#product-purchase-menu').addEventListener('click', showProductPurchase);
};

export default function vendingMachineApp() {
  init();
}

window.addEventListener('DOMContentLoaded', () => {
  vendingMachineApp();
});
