import { $ } from './utils/querySelector.js';
import { initScreenTemplate } from './utils/initScreenTemplate.js';
import handleProductMenuSubmit from './components/manage/productAddMenu.js';
import { productManageTemplate } from './components/manage/manageTemplate.js';

const init = () => {
  $('#app').innerHTML = initScreenTemplate;

  $('#product-add-menu').addEventListener('click', () => {
    $('#app-container').innerHTML = productManageTemplate;
    $('form').addEventListener('submit', handleProductMenuSubmit);
  });
};

export default function vendingMachineApp() {
  init();
}

window.addEventListener('DOMContentLoaded', () => {
  vendingMachineApp();
});
