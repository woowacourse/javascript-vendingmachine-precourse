import $ from './utils/dom.js';
import HandleProductAdd from './controllers/handleProductAdd.js';
import HandleVendingMachine from './controllers/handleVendingMachine.js';
import HandleProductPurchase from './controllers/handleProductPurchase.js';
import renderCSS from './views/renderCSS.js';
import { renderNavbar, renderProductAdd, renderVendingMachine, renderProductPurchase } from './views/renderInitHTML.js';

function VendingMachineApp() {
  this.init = () => {
    renderCSS();
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
