import {
  CURRENT_TAB_KEY,
  TAB_PRODUCT_ADD_ID,
  TAB_CHARGE_ID,
  TAB_PURCHASE_ID,
} from '../constant/constant.js';
import addProductHandler from '../eventHandler/addProductHandler.js';
import chargeHandler from '../eventHandler/chargeHandler.js';
import purchaseHandler from '../eventHandler/purchaseHandler.js';
import renderCharge from './renderCharge.js';
import renderProductAdd from './renderProductAdd.js';
import renderPurchase from './renderPurchase.js';

export default function renderCurrentTab(vendingMachine) {
  const id = localStorage.getItem(CURRENT_TAB_KEY);

  if (id === null || id === TAB_PRODUCT_ADD_ID) {
    renderProductAdd(vendingMachine);
    addProductHandler(vendingMachine);
  }
  if (id === TAB_CHARGE_ID) {
    renderCharge(vendingMachine);
    chargeHandler(vendingMachine);
  }
  if (id === TAB_PURCHASE_ID) {
    renderPurchase(vendingMachine);
    purchaseHandler(vendingMachine);
  }
}
