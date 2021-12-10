import { addMenu } from './addMenu.js';
import { addProductManager } from './addProductManager.js';
import { addVendingMachineChargeManager } from './addVendingMachineChargeManager.js';
import { addPurchaseManager } from './addPurchaseManager.js';
import {
  addListenerToMenuButton,
  addListenerToProductAddButton,
  addListenerToVendingMachineChargeButton,
  addListenerToChargeButton,
} from './addListenerToButton.js';

export const initDom = () => {
  addMenu();
  addProductManager();
  addVendingMachineChargeManager();
  addPurchaseManager();
  addListenerToMenuButton();
  addListenerToProductAddButton();
  addListenerToVendingMachineChargeButton();
  addListenerToChargeButton();
};
