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
    switch (e.target.id) {
      case 'purchase-button':
        purchaseMenu(e.target);
        renderMenuItems(purchableProductItemsConstants);
        callRenderAmountSpan();
        break;
      case 'coin-return-button':
        getnumberOfCoinsList();
        callRenderAmountSpan();
        break;
      default:
        renderTabs(e);
    }
  };

  const handleSubmit = e => {
    switch (e.target.id) {
      case 'product-add-form':
        makeMenuTemplte(e);
        break;
      case 'vending-machine-charge-form':
        checkChangesInput(e);
        break;
      case 'charge-form':
        addInputAmount(e);
        callRenderAmountSpan();
        break;
    }
  };

  const renderTabs = e => {
    switch (e.target.id) {
      case 'product-add-menu':
        renderProductAddMenu();
        break;
      case 'vending-machine-manage-menu':
        renderVendingMachineManageMenu();
        break;
      case 'product-purchase-menu':
        renderProductPurchaseMenu();
        break;
    }
  };

  $('#app').addEventListener('click', handleClick);
  $('#app').addEventListener('submit', handleSubmit);
}

new App();
