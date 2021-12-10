import { DOM, PLAIN_TEXT, TAB } from '../lib/constants.js';

/** Model */
class VendingMachineModel {
  constructor() {
    this.tab = TAB.PRODUCT_ADD_MENU;
    this.productAddInputsValue = {
      [`${DOM.PRODUCT_NAME_INPUT}`]: PLAIN_TEXT,
      [`${DOM.PRODUCT_PRICE_INPUT}`]: PLAIN_TEXT,
      [`${DOM.PRODUCT_QUANTITY_INPUT}`]: PLAIN_TEXT,
    };
    this.productList = [{ name: '콜라', price: '1500', count: '10' }];

    this.vendingMachineChargeInputsValue = {
      [`${DOM.VENDING_MACHINE_CHARGE_INPUT}`]: PLAIN_TEXT,
    };
    this.vendingMachineCharge = 0;

    this.chargeInputValue = {
      [`${DOM.CHARGE_INPUT}`]: PLAIN_TEXT,
    };
  }

  setTab(newTab) {
    this.tab = newTab;
  }

  setProductAddInputsValue(predicate) {
    this.productAddInputsValue = predicate(this.productAddInputsValue);
  }

  setVendingMachineChargeInputsValue(predicate) {
    this.vendingMachineChargeInputsValue = predicate(this.vendingMachineChargeInputsValue);
  }

  setChargeInputValue(predicate) {
    this.chargeInputValue = predicate(this.chargeInputValue);
  }
}
export default VendingMachineModel;
