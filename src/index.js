import { $ } from './utils/querySelector.js';
import { initScreenTemplate } from './utils/initScreenTemplate.js';
import { handleProductAddMenu } from './components/addMenu/handleAddMenu.js';

const init = () => {
  $('#product-add-menu').addEventListener('click', handleProductAddMenu);
};

export default function vendingMachineApp() {
  $('#app').innerHTML = initScreenTemplate;

  init();
}

window.addEventListener('DOMContentLoaded', () => {
  vendingMachineApp();
});
