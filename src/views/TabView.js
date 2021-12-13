import { CUSTOM_EVENT_NAME, SELECTOR } from "../constants.js";
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
      this.emit(CUSTOM_EVENT_NAME.SHOW_PRODUCT_PURCHASE_MENU);
    });
    on(this.vendingMachineManageMenu, 'click', () => {
      this.emit(CUSTOM_EVENT_NAME.SHOW_VENDING_MACHINE_MANAGE_MENU);
    });
    on(this.productAddMenu, 'click', () => {
      this.emit(CUSTOM_EVENT_NAME.SHOW_PRODUCT_ADD_MENU);
    });
  }
}
