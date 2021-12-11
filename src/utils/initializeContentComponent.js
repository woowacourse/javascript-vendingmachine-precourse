import { DOM_ID_SELECTOR, STORAGE_KEY } from '../constants.js';
import * as storage from './storage.js';
import renderProductAddTemplate from '../dom/renderProductAddTemplate.js';
import renderProductPurchaseTemplate from '../dom/renderProductPurchaseTemplate.js';
import renderVendingMachineManageMenuTemplate from '../dom/renderVendingMachineManageMenuTemplate.js';
import printProductManageTable from '../dom/printProductManageTable.js';
import printChargeAmount from '../dom/printChargeAmount.js';
import printProductPurchaseItemTable from '../dom/printProductPurchaseItemTable.js';
import printVendingMachineAmountAndCoinTable from '../dom/printVendingMachineAmountAndCoinTable.js';
import attachProductAddEvent from '../event/attachProductAddEvent.js';
import attachChargeEvent from '../event/attachChargeEvent.js';
import attachReturnCoinEvent from '../event/attachReturnCoinEvent.js';
import attachVendingMachineChargeEvent from '../event/attachVendingMachineChargeEvent.js';

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
