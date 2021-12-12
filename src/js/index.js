// prettier-ignore
import { initRender, renderProductAddMenu, renderVendingMachineManageMenu, renderProductPurchaseMenu } from './render/render.js';
import { $ } from './util/dom.js';
import { makeMenuTemplte, purchaseMenu } from './core/manageMenu.js';
import { checkChangesInput } from './core/manageChanges.js';
import { getnumberOfCoinsList } from './core/manageCoins.js';
import { addInputAmount } from './core/manageInputAmount.js';

function App() {
  initRender();
  renderProductAddMenu();

  const handleClick = e => {
    if (e.target.id === 'product-add-menu') {
      renderProductAddMenu();
    } else if (e.target.id === 'vending-machine-manage-menu') {
      renderVendingMachineManageMenu();
    } else if (e.target.id === 'product-purchase-menu') {
      renderProductPurchaseMenu();
    } else if (e.target.classList.contains('purchase-button')) {
      purchaseMenu(e.target);
    } else if (e.target.id === 'coin-return-button') {
      getnumberOfCoinsList();
    }
  };
  const handleSubmit = e => {
    if (e.target.id === 'product-add-form') {
      makeMenuTemplte(e);
    } else if (e.target.id === 'vending-machine-charge-form') {
      checkChangesInput(e);
    } else if (e.target.id === 'charge-form') {
      addInputAmount(e);
    }
  };

  $('#app').addEventListener('click', handleClick);
  $('#app').addEventListener('submit', handleSubmit);
}

new App();
