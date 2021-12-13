// prettier-ignore
import { renderProductAddMenu, renderVendingMachineManageMenu, renderProductPurchaseMenu } from './render/tabs.js';
// prettier-ignore
import {addInputAmount, callRenderAmountSpan } from './core/manageInputAmount.js';
import { initRender, renderMenuItems } from './render/common.js';
import { purchableProductItemsConstants } from './constant/string.js';
import { $ } from './util/dom.js';
import { makeMenuTemplte, purchaseMenu } from './core/manageMenu.js';
import { checkChangesInput } from './core/manageChanges.js';
import { getnumberOfCoinsList } from './core/manageCoins.js';

function App() {
  $('head').innerHTML = `<link rel="stylesheet" href="src/css/style.css"/>`;
  initRender();
  renderProductAddMenu();

  const handleClick = e => {
    renderTabs(e);
    if (e.target.classList.contains('purchase-button')) {
      purchaseMenu(e.target);
      renderMenuItems(purchableProductItemsConstants);
      callRenderAmountSpan();
    } else if (e.target.id === 'coin-return-button') {
      getnumberOfCoinsList();
      callRenderAmountSpan();
    }
  };

  const handleSubmit = e => {
    if (e.target.id === 'product-add-form') {
      makeMenuTemplte(e);
    } else if (e.target.id === 'vending-machine-charge-form') {
      checkChangesInput(e);
    } else if (e.target.id === 'charge-form') {
      addInputAmount(e);
      callRenderAmountSpan();
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

  $('#app').addEventListener('click', handleClick);
  $('#app').addEventListener('submit', handleSubmit);
}

new App();
