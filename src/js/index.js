import { $ } from './utils/querySelector.js';
import { initScreenTemplate } from './utils/initScreenTemplate.js';
import handleProductMenuSubmit from './components/addMenu/productAddMenu.js';
import { productAddMenuTemplate } from './components/addMenu/addMenuTemplate.js';

const init = () => {
  $('#app').innerHTML = initScreenTemplate;

  $('#product-add-menu').addEventListener('click', () => {
    $('#app-container').innerHTML = productAddMenuTemplate;
    $('form').addEventListener('submit', handleProductMenuSubmit);
  });
};

export default function vendingMachineApp() {
  init();
}

window.addEventListener('DOMContentLoaded', () => {
  vendingMachineApp();
});
