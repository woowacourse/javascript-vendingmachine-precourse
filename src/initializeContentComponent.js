import { DOM_ID_SELECTOR, STORAGE_KEY } from './constants.js';
import * as storage from './storage.js';
import renderProductAddTemplate from './renderProductAddTemplate.js';
import renderProductPurchaseTemplate from './renderProductPurchaseTemplate.js';
import renderVendingMachineManageMenuTemplate from './renderVendingMachineManageMenuTemplate.js';
import printProductManageTable from './printProductManageTable.js';
import printChargeAmount from './printChargeAmount.js';
import printProductPurchaseItemTable from './printProductPurchaseItemTable.js';
import printVendingMachineAmountAndCoinTable from './printVendingMachineAmountAndCoinTable.js';
import attachProductAddEvent from './attachProductAddEvent.js';
import attachChargeEvent from './attachChargeEvent.js';
import attachReturnCoinEvent from './attachReturnCoinEvent.js';
import attachVendingMachineChargeEvent from './attachVendingMachineChargeEvent.js';

const initializeProductAddComponent = (vendingMachine) => {
  renderProductAddTemplate();
  printProductManageTable(vendingMachine.product);
  attachProductAddEvent(vendingMachine.product);
};

const initializeVendingMachineManageMenuComponent = (vendingMachine) => {
  renderVendingMachineManageMenuTemplate();
  printVendingMachineAmountAndCoinTable(vendingMachine.coin);
  attachVendingMachineChargeEvent(vendingMachine.coin);
};

const initializeProductPurchaseComponent = (vendingMachine) => {
  renderProductPurchaseTemplate();
  printChargeAmount(vendingMachine.getMoney());
  printProductPurchaseItemTable(vendingMachine);
  attachChargeEvent(vendingMachine);
  attachReturnCoinEvent(vendingMachine);
};

const getInitializeFunction = (menu) => {
  const domIdInitializeFunctionMapper = {
    [DOM_ID_SELECTOR.productAddMenu]: initializeProductAddComponent,
    [DOM_ID_SELECTOR.vendingMachineManageMenu]: initializeVendingMachineManageMenuComponent,
    [DOM_ID_SELECTOR.productPurchaseMenu]: initializeProductPurchaseComponent,
  };

  return domIdInitializeFunctionMapper[menu];
};

const initializeContentComponent = (menu, vendingMachine) => {
  getInitializeFunction(menu)(vendingMachine);
  storage.save(STORAGE_KEY.menu, menu);
};

export default initializeContentComponent;
