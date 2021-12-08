import Menu from "./controllers/menu/menu.js";
import { showHeader } from "./views/header/showHeader.js";
import { addChargeManager } from "./views/chargeManager/addChargeManager.js";
import { addProductManager } from "./views/productManager/addProductManager.js";
import { addPurchaseManager } from "./views/purchaseManager/addPurchaseManager.js";

class VendingMachine {
  constructor() {
    this.init();
    this.menu = new Menu();
  }

  init() {
    showHeader();
    addProductManager();
    addChargeManager();
    addPurchaseManager();
  }
}

new VendingMachine();
