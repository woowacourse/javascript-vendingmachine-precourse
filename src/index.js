import MenuBtnHandler from './handler/MenuBtnHandler.js';
import init from './init/init.js';
import ProductAddUtil from './utils/ProductAddUtil.js';
import ProductPurchaseUtil from './utils/ProductPurchaseUtil.js';
import VendingMachineUtil from './utils/VendingMachineUtil.js';

init();
new MenuBtnHandler();
new ProductAddUtil();
new VendingMachineUtil();
new ProductPurchaseUtil();
