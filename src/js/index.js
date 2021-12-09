import {
  renderProductManagePage,
  renderPurchaseProductPage,
  renderChargeChangesPage,
} from './render.js';
import { $ } from './util/dom.js';
import { addMenu } from './addMenu.js';

function App() {
  renderProductManagePage();
  $('#app').addEventListener('click', function (e) {
    if (e.target.id === 'product-add-menu') {
      renderProductManagePage();
    } else if (e.target.id === 'vending-machine-manage-menu') {
      renderChargeChangesPage();
    } else if (e.target.id === 'product-purchase-menu') {
      renderPurchaseProductPage();
    }
  });
  $('#app').addEventListener('submit', function (e) {
    if (e.target.id === 'product-add-form') {
      addMenu(e);
    }
  });
}

const app = new App();
