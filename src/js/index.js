// prettier-ignore
import { renderProductAddMenu, renderVendingMachineManageMenu, renderProductPurchaseMenu } from './render/render.js';
import { initRender, renderAmountSpan } from './render/common.js';
import { $ } from './util/dom.js';
import { makeMenuTemplte, purchaseMenu } from './core/manageMenu.js';
import { checkChangesInput } from './core/manageChanges.js';
import { getnumberOfCoinsList } from './core/manageCoins.js';
import { addInputAmount } from './core/manageInputAmount.js';
import { localStorageConstants } from './constant/localstorage.js';
import { inputtedAmountSpanConstants } from './constant/string.js';

function App() {
  $('head').innerHTML = `<link rel="stylesheet" href="src/css/style.css"/>`;
  initRender();
  renderProductAddMenu();

  const handleClick = e => {
    renderTabs(e);
    if (e.target.classList.contains('purchase-button')) {
      purchaseMenu(e.target);
    } else if (e.target.id === 'coin-return-button') {
      getnumberOfCoinsList();
      renderAmountSpan(
        inputtedAmountSpanConstants,
        localStorageConstants.INPUT_AMOUNT,
        e,
      );
    }
  };

  const renderTabs = e => {
    if (e.target.id === 'product-add-menu') {
      renderProductAddMenu();
    } else if (e.target.id === 'vending-machine-manage-menu') {
      renderVendingMachineManageMenu();
    } else if (e.target.id === 'product-purchase-menu') {
      renderProductPurchaseMenu();
    }
  };

  const handleSubmit = e => {
    if (e.target.id === 'product-add-form') {
      makeMenuTemplte(e);
    } else if (e.target.id === 'vending-machine-charge-form') {
      checkChangesInput(e);
    } else if (e.target.id === 'charge-form') {
      addInputAmount(e);
      renderAmountSpan(
        inputtedAmountSpanConstants,
        localStorageConstants.INPUT_AMOUNT,
      );
    }
  };

  $('#app').addEventListener('click', handleClick);
  $('#app').addEventListener('submit', handleSubmit);
}

new App();
