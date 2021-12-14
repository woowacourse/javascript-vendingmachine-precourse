import VendingMachine from '../model/VendingMachine.js';
import { ID } from '../utils/constants.js';
import View from '../view/View.js';
import ProductAddController from './ProductAddController.js';
import ProductPurchaseController from './ProductPurchaseController.js';
import VendingMachineManageController from './VendingMachineManageController.js';

class VendingMachineController {
  constructor() {
    this.vendingMachine = new VendingMachine();
    this.view = new View();
    this.getCurrentTabMenu = this.vendingMachine.getCurrentTabMenu();

    this.init();

    this.productAddController = new ProductAddController(
      this.vendingMachine,
      this.view,
      this.getCurrentTabMenu
    );

    this.vendingMachineManageController = new VendingMachineManageController(
      this.vendingMachine,
      this.view,
      this.getCurrentTabMenu
    );

    this.productPurchaseController = new ProductPurchaseController(
      this.vendingMachine,
      this.view,
      this.getCurrentTabMenu
    );
  }

  init() {
    this.initDOM();
    this.triggerTabMenuClickEvent();
  }

  initDOM() {
    this.$product_purchase_menu = document.getElementById(ID.PRODUCT_PURCHASE_MENU);
    this.$vending_machine_manage_menu = document.getElementById(ID.VENDING_MACHINE_MANAGE_MENU);
    this.$product_add_menu = document.getElementById(ID.PRODUCT_ADD_MENU);
  }

  triggerTabMenuClickEvent() {
    this.$product_purchase_menu.addEventListener('click', () => {
      this.productPurchaseController.showScreen(ID.PRODUCT_PURCHASE_MENU);
    });

    this.$vending_machine_manage_menu.addEventListener('click', () => {
      this.vendingMachineManageController.showScreen(ID.VENDING_MACHINE_MANAGE_MENU);
    });

    this.$product_add_menu.addEventListener('click', () => {
      this.productAddController.showScreen(ID.PRODUCT_ADD_MENU);
    });
  }
}

export default VendingMachineController;
