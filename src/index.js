import VendingMachineController from './controllers/VendingMachineController.js';
import ProductAddMenuController from './controllers/ProductAddMenuController.js';
import VendingMachineManageMenuController from './controllers/VendingMachineManageMenuController.js';
import ProductPurchaseMenuController from './controllers/ProductPurchaseMenuController.js';

class VendingMachine {
  constructor() {
    this.$vendingMachineController = new VendingMachineController();
    this.$productAddMenuController = new ProductAddMenuController();
    this.$vendingMachineManageMenuController = new VendingMachineManageMenuController();
    this.$productPurchaseMenuController = new ProductPurchaseMenuController();
  }
}

new VendingMachine();
