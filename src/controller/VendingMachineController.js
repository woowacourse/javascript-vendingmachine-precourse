import VendingMachine from '../model/VendingMachine.js';
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
    this.$product_purchase_menu = document.getElementById('product-purchase-menu');
    this.$vending_machine_manage_menu = document.getElementById('vending-machine-manage-menu');
    this.$product_add_menu = document.getElementById('product-add-menu');
  }

  triggerTabMenuClickEvent() {
    this.$product_purchase_menu.addEventListener('click', () => {
      this.productPurchaseController.showScreen('product-purchase-menu');
    });

    this.$vending_machine_manage_menu.addEventListener('click', () => {
      this.vendingMachineManageController.showScreen('vending-machine-manage-menu');
    });

    this.$product_add_menu.addEventListener('click', () => {
      this.productAddController.showScreen('product-add-menu');
    });
  }
}

export default VendingMachineController;
