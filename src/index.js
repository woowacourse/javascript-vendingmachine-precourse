import renderAppTemplate from './renderAppTemplate.js';
import renderProductAddTemplate from './renderProductAddTemplate.js';
import renderVendingMachineManageMenuTemplate from './renderVendingMachineManageMenuTemplate.js';
import renderProductPurchaseTemplate from './renderProductPurchaseTemplate.js';
import attachProductAddEvent from './attachProductAddEvent.js';
import { DOM_ID_SELECTOR } from './constants.js';
import attachVendingMachineChargeEvent from './attachVendingMachineChargeEvent.js';
import printProductManageTable from './printProductManageTable.js';
import printVendingMachineAmountAndCoinTable from './printVendingMachineAmountAdnCoinTable.js';
import attachChargeEvent from './attachChargeEvent.js';
import VendingMachine from './VendingMachine.js';
import printChargeAmount from './printChargeAmount.js';
import printProductPurchaseItemTable from './printProductPurchaseItemTable.js';

renderAppTemplate();
const vendingMachine = new VendingMachine();

const $productAddMenu = document.getElementById(DOM_ID_SELECTOR.productAddMenu);
$productAddMenu.addEventListener('click', () => {
  renderProductAddTemplate();
  printProductManageTable(vendingMachine.product);
  attachProductAddEvent(vendingMachine.product);
});

const $vendingMachineManageMenu = document.getElementById(DOM_ID_SELECTOR.vendingMachineManageMenu);
$vendingMachineManageMenu.addEventListener('click', () => {
  renderVendingMachineManageMenuTemplate();
  printVendingMachineAmountAndCoinTable(vendingMachine.coin);
  attachVendingMachineChargeEvent(vendingMachine.coin);
});

const $productPurchaseMenu = document.getElementById(DOM_ID_SELECTOR.productPurchaseMenu);
$productPurchaseMenu.addEventListener('click', () => {
  renderProductPurchaseTemplate();
  printChargeAmount(vendingMachine.getMoney());
  printProductPurchaseItemTable(vendingMachine.product);
  attachChargeEvent(vendingMachine);
});
