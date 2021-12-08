import Menu from "./controllers/menu/menu.js";
import ProductManager from "./controllers/productManager/productManager.js";
import ChargeManager from "./controllers/chargeManager/chargeManager.js";
import { showHeader } from "./views/header/showHeader.js";
import { addChargeManager } from "./views/chargeManager/addChargeManager.js";
import { addProductManager } from "./views/productManager/addProductManager.js";
import { addPurchaseManager } from "./views/purchaseManager/addPurchaseManager.js";

class VendingMachine {
  constructor() {
    this.init();
    this.menu = new Menu();
    this.productManager = new ProductManager();
    this.chargeManager = new ChargeManager();
  }

  init() {
    showHeader();
    addProductManager();
    addChargeManager();
    addPurchaseManager();
  }
}

new VendingMachine();
