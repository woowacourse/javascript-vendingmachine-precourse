import $ from './utils/dom.js';
import renderProductAdd from './views/renderProductAdd.js';
import renderVendingMachine from './views/renderVendingMachine.js';
import renderProductPurchase from './views/renderProductPurchase.js';
import handleProductAdd from './controllers/handleProductAdd.js';
import handleVendingMachine from './controllers/handleVendingMachine.js';
import handleProductPurchase from './controllers/handleProductPurchase.js';
import renderNavbar from './views/renderNavbar.js';

function VendingMachineApp() {
  this.init = () => {
    renderNavbar();
  };

  $('#app').addEventListener('click', e => {
    if (e.target.id === 'product-add-menu') {
      renderProductAdd();
      handleProductAdd();
    }

    if (e.target.id === 'vending-machine-manage-menu') {
      renderVendingMachine();
      handleVendingMachine();
    }

    if (e.target.id === 'product-purchase-menu') {
      renderProductPurchase();
      handleProductPurchase();
    }
  });
}

const app = new VendingMachineApp();
app.init();
