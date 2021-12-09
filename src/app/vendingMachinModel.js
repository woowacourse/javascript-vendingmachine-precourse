import { DOM, PLAIN_TEXT, TAB } from '../lib/constants.js';

/** Model */
class VendingMachineModel {
  constructor() {
    this.tab = TAB.PRODUCT_ADD_MENU;
    this.productPurchaseInputsValueState = {
      [`${DOM.PRODUCT_NAME_INPUT}`]: PLAIN_TEXT,
      [`${DOM.PRODUCT_PRICE_INPUT}`]: PLAIN_TEXT,
      [`${DOM.PRODUCT_QUANTITY_INPUT}`]: PLAIN_TEXT,
    };
  }

  setProductPurchaseInputsValueState(newProductPurchaseInputsValueState) {
    this.productPurchaseInputsValueState = newProductPurchaseInputsValueState;
  }

  setTab(newTab) {
    this.tab = newTab;
  }
}
export default VendingMachineModel;
