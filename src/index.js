import { $ } from './utils/querySelector.js';
import { initScreenTemplate } from './utils/initScreenTemplate.js';
import { showProductManage } from './components/manage/productAddMenu.js';
import { showCoinCharge } from './components/charge/coinCharge.js';

const init = () => {
  $('#app').innerHTML = initScreenTemplate;

  $('#product-add-menu').addEventListener('click', showProductManage);
  $('#product-purchase-menu').addEventListener('click', showCoinCharge);
};

export default function vendingMachineApp() {
  init();
}

window.addEventListener('DOMContentLoaded', () => {
  vendingMachineApp();
});
