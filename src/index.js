import { initDom } from './dom/init/initDom.js';
import VendingMachine from './class/vendingMachine.js';
import { initProductList } from './localStorage/products.js';
import { initCharges } from './localStorage/charge.js';

export const vendingMachine = new VendingMachine();

initDom();
initProductList();
initCharges();
