import $ from './utils/dom.js';
import HandleProductAdd from './controllers/HandleProductAdd.js';
import HandleVendingMachine from './controllers/HandleVendingMachine.js';
import HandleProductPurchase from './controllers/HandleProductPurchase.js';
import { renderNavbar, renderProductAdd, renderVendingMachine, renderProductPurchase } from './views/renderHTML.js';

function VendingMachineApp() {
  this.init = () => {
    $('head').insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="./src/css/style.css">');
    renderNavbar();
  };

  $('#app').addEventListener('click', e => {
    if (e.target.id === 'product-add-menu') {
      renderProductAdd();
      new HandleProductAdd();
    }

    if (e.target.id === 'vending-machine-manage-menu') {
      renderVendingMachine();
      new HandleVendingMachine();
    }

    if (e.target.id === 'product-purchase-menu') {
      renderProductPurchase();
      new HandleProductPurchase();
    }
  });
}

const app = new VendingMachineApp();
app.init();
