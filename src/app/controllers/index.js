import { TAB } from '../../lib/constants.js';
import ProductAddController from '../controllers/ProductAddController.js';
import ProductPurchaseController from '../controllers/ProductPurchaseController.js';
import VendingMachineManageController from '../controllers/VendingMachineManageController.js';

class VendingMachineController {
  constructor({ view, model }) {
    this.$view = view;
    this.$model = model;
    this.initSubController();
    this.registerTabEventHandler();
    this.triggerRenderMainView();
  }

  initSubController() {
    this.$productAddController = new ProductAddController({ view: this.$view, model: this.$model });
    this.$productPurchaseController = new ProductPurchaseController({
      view: this.$view,
      model: this.$model,
    });
    this.$vendingMachineManageController = new VendingMachineManageController({
      view: this.$view,
      model: this.$model,
    });
  }

  registerTabEventHandler() {
    this.$view.tabMenuSection.addEventListener('click', this.onClickTabMenuSection.bind(this));
  }

  triggerRenderMainView() {
    const tab = this.$model.getTab();

    if (tab === TAB.PRODUCT_ADD_MENU) {
      this.executeRenderProductAddMenu();
    }
    if (tab === TAB.VENDING_MACHINE_MANAGE_MENU) {
      this.executeRenderVendingMachineManageMenu();
    }
    if (tab === TAB.PRODUCT_PURCHASE_MENU) {
      this.executeRenderProductPurchaseMenu();
    }
  }

  executeRenderProductAddMenu() {
    this.$view.renderProductAddMenu(
      this.$model.getProductAddInputsValue(),
      this.$model.getProductList()
    );
    this.$productAddController.registerEventHandler();
  }

  executeRenderVendingMachineManageMenu() {
    this.$view.renderVendingMachineManageMenu(
      this.$model.getVendingMachineChargeInputsValue(),
      this.$model.getCoins(),
      this.$model.getVendingMachineChargeAmount()
    );
    this.$vendingMachineManageController.registerEventHandler();
  }

  executeRenderProductPurchaseMenu() {
    this.$view.renderProductPurchaseMenu(
      this.$model.getChargeInputsValue(),
      this.$model.getChargeAmount(),
      this.$model.getProductList()
    );
    this.$productPurchaseController.registerEventHandler();
  }

  onClickTabMenuSection(e) {
    const {
      target: { textContent },
    } = e;
    this.$model.setTab(textContent);
    this.triggerRenderMainView();
  }
}
export default VendingMachineController;
