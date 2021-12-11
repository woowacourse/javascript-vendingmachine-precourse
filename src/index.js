import { initDom } from './dom/init/initDom.js';
import VendingMachine from './class/vendingMachine.js';
import { initProductList } from './localStorage/products.js';
import { initCharges } from './localStorage/vendingMachineCharge.js';
import { initUserCharge } from './localStorage/userCharge.js';
import { initPurchasableProductTable } from './dom/control/updatePurchasableProductTable.js';

export const vendingMachine = new VendingMachine();

initDom();
initProductList();
initCharges();
initUserCharge();
initPurchasableProductTable();
