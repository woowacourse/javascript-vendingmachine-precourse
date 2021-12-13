import { SELECTOR } from "../constants.js";
import { on, qs } from "../utils/index.js";
import View from "./View.js";


export default class TabView extends View {
  constructor(element = qs(SELECTOR.TAB_BUTTONS)) {
    super(element);

    this.productPurchaseMenu = qs(SELECTOR.PURCHASE_MENU);
    this.vendingMachineManageMenu = qs(SELECTOR.COIN_MENU);
    this.productAddMenu = qs(SELECTOR.PRODUCT_MENU);

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
