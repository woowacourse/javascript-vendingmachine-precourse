import { DOM, PLAIN_TEXT, TAB } from '../lib/constants.js';

/** Model */
class VendingMachineModel {
  constructor() {
    this.tab = TAB.PRODUCT_ADD_MENU;

    this.initProductAddModel();
    this.initVendingMachineChargeModel();
    this.initProductPurchaseModel();
  }

  initProductAddModel() {
    this.productAddInputsValue = {
      [`${DOM.PRODUCT_NAME_INPUT}`]: PLAIN_TEXT,
      [`${DOM.PRODUCT_PRICE_INPUT}`]: PLAIN_TEXT,
      [`${DOM.PRODUCT_QUANTITY_INPUT}`]: PLAIN_TEXT,
    };
    this.productList = [];
  }

  initVendingMachineChargeModel() {
    this.vendingMachineChargeInputsValue = {
      [`${DOM.VENDING_MACHINE_CHARGE_INPUT}`]: PLAIN_TEXT,
    };
    this.vendingMachineCharge = 0;
  }

  initProductPurchaseModel() {
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

  /** 세개의 인풋 중 하나라도 입력이 안되어 있다면  */
  addProduct() {
    const newProduct = {
      name: this.productAddInputsValue[DOM.PRODUCT_NAME_INPUT],
      price: this.productAddInputsValue[DOM.PRODUCT_PRICE_INPUT],
      quantity: this.productAddInputsValue[DOM.PRODUCT_QUANTITY_INPUT],
    };
    this.productList = [...this.productList, newProduct];
  }
}
export default VendingMachineModel;
