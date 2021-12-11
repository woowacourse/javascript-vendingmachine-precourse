import { DOM_ID_SELECTOR } from './constants.js';
import renderProductAddTemplate from './renderProductAddTemplate.js';
import renderVendingMachineManageMenuTemplate from './renderVendingMachineManageMenuTemplate.js';
import renderProductPurchaseTemplate from './renderProductPurchaseTemplate.js';
import printProductManageTable from './printProductManageTable.js';
import printVendingMachineAmountAndCoinTable from './printVendingMachineAmountAndCoinTable.js';
import printChargeAmount from './printChargeAmount.js';
import printProductPurchaseItemTable from './printProductPurchaseItemTable.js';
import attachProductAddEvent from './attachProductAddEvent.js';
import attachVendingMachineChargeEvent from './attachVendingMachineChargeEvent.js';
import attachChargeEvent from './attachChargeEvent.js';
import attachReturnCoinEvent from './attachReturnCoinEvent.js';

const attachProductAddMenuClickEvent = (vendingMachine) => {
  const $productAddMenu = document.getElementById(DOM_ID_SELECTOR.productAddMenu);
  $productAddMenu.addEventListener('click', () => {
    renderProductAddTemplate();
    printProductManageTable(vendingMachine.product);
    attachProductAddEvent(vendingMachine.product);
  });
};

const attachVendingMachineManageMenuClickEvent = (vendingMachine) => {
  const $vendingMachineManageMenu = document.getElementById(DOM_ID_SELECTOR.vendingMachineManageMenu);
  $vendingMachineManageMenu.addEventListener('click', () => {
    renderVendingMachineManageMenuTemplate();
    printVendingMachineAmountAndCoinTable(vendingMachine.coin);
    attachVendingMachineChargeEvent(vendingMachine.coin);
  });
};

const attachProductPurchaseMenuClickEvent = (vendingMachine) => {
  const $productPurchaseMenu = document.getElementById(DOM_ID_SELECTOR.productPurchaseMenu);
  $productPurchaseMenu.addEventListener('click', () => {
    renderProductPurchaseTemplate();
    printChargeAmount(vendingMachine.getMoney());
    printProductPurchaseItemTable(vendingMachine);
    attachChargeEvent(vendingMachine);
    attachReturnCoinEvent(vendingMachine);
  });
};

const attachMenuTabEvent = (vendingMachine) => {
  attachProductAddMenuClickEvent(vendingMachine);
  attachVendingMachineManageMenuClickEvent(vendingMachine);
  attachProductPurchaseMenuClickEvent(vendingMachine);
};

export default attachMenuTabEvent;
