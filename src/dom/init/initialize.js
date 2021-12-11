import { createMenu } from './createMenu.js';
import { createProductManager } from './createProductManager.js';
import { createVendingMachineChargeManager } from './createVendingMachineChargeManager.js';
import { createPurchaseManager } from './createPurchaseManager.js';
import {
  addListenerToMenuButton,
  addListenerToProductAddButton,
  addListenerToVendingMachineChargeButton,
  addListenerToChargeButton,
  addListenerToReturnCoinButton,
} from './addListenerToButton.js';
import { initProductList } from '../../storage/products.js';
import { initCharges } from '../../storage/vendingMachineCharge.js';
import { initUserCharge } from '../../storage/userCharge.js';
import { initPurchasableProductTable } from '../control/updatePurchasableProductTable.js';
import { vendingMachine } from '../../index.js';
import { createProductTableRow } from '../control/updateProductTable.js';
import { updateVendingMachineCharge } from '../control/updateVendingMachineChargeTable.js';
import { updateUserChargeAmount } from '../control/updateUserChargeAmount.js';

export const initialize = () => {
  createMenu();
  createManagers();
  addListenterToButton();
  addDataToModel();
  addDataToView();
};

const createManagers = () => {
  createProductManager();
  createVendingMachineChargeManager();
  createPurchaseManager();
};

const addListenterToButton = () => {
  addListenerToMenuButton();
  addListenerToProductAddButton();
  addListenerToVendingMachineChargeButton();
  addListenerToChargeButton();
  addListenerToReturnCoinButton();
};

const addDataToModel = () => {
  initProductList();
  initCharges();
  initUserCharge();
};

const addDataToView = () => {
  createProductTableRow(vendingMachine.products);
  updateVendingMachineCharge();
  updateUserChargeAmount();
  initPurchasableProductTable();
};
