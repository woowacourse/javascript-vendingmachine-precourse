import { on, qs } from "../utils/index.js";
import View from "./View.js";


export default class TabView extends View {
  constructor(element = qs('#tab-buttons')) {
    super(element);

    this.productPurchaseMenu = qs('#product-purchase-menu');
    this.vendingMachineManageMenu = qs('#vending-machine-manage-menu');
    this.productAddMenu = qs('#product-add-menu');

    this.bindEvents();
  }

  bindEvents() {
    on(this.productPurchaseMenu, 'click', () => {
      this.emit('@showProductPurchaseMenu');
    });
    on(this.vendingMachineManageMenu, 'click', () => {
      this.emit('@showVendingMachineManageMenu');
    });
    on(this.productAddMenu, 'click', () => {
      this.emit('@showProductAddMenu');
    });
  }
}
