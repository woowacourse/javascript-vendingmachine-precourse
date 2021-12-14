import { PLAIN_TEXT } from '../../lib/constants.js';
import { getInitilizeCoins } from '../../lib/utils.js';
import store from '../../modules/store.js';
import { DATA_MODEL_KEYS, DOM, LOCALSTORAGE_DATA_MODEL_KEY, TAB } from '../constants.js';

class VendingMachineModel {
  constructor() {
    const prevValue = store.getLocalStorage(LOCALSTORAGE_DATA_MODEL_KEY);
    if (prevValue) {
      this.setDataModel(prevValue);
    } else {
      this.dataModel = {};
      this.initDataModel();
      this.initProductAddModel();
      this.initVendingMachineChargeModel();
      this.initProductPurchaseModel();
    }
  }

  initDataModel() {
    this.setTab(TAB.PRODUCT_ADD_MENU);
  }

  initProductAddModel() {
    this.setProductAddInputsValue((prev) => ({
      ...prev,
      [`${DOM.PRODUCT_NAME_INPUT}`]: PLAIN_TEXT,
      [`${DOM.PRODUCT_PRICE_INPUT}`]: PLAIN_TEXT,
      [`${DOM.PRODUCT_QUANTITY_INPUT}`]: PLAIN_TEXT,
    }));
    this.setProductList([]);
  }

  initVendingMachineChargeModel() {
    this.setVendingMachineChargeInputsValue((prev) => ({
      ...prev,
      [`${DOM.VENDING_MACHINE_CHARGE_INPUT}`]: PLAIN_TEXT,
    }));
    this.setCoins(getInitilizeCoins());
  }

  initProductPurchaseModel() {
    this.setChargeInputsValue((prev) => ({
      ...prev,
      [`${DOM.CHARGE_INPUT}`]: PLAIN_TEXT,
    }));
    this.setChargeAmount(0);
  }

  setDataModel(value) {
    this.dataModel = value;
  }

  setDataModelPropertyValue(KEY, VALUE) {
    this.dataModel[KEY] = VALUE;
    store.setLocalStorage(LOCALSTORAGE_DATA_MODEL_KEY, this.dataModel);
  }

  setTab(newTab) {
    this.setDataModelPropertyValue(DATA_MODEL_KEYS.TAB, newTab);
  }

  setProductAddInputsValue(predicate) {
    this.setDataModelPropertyValue(
      DATA_MODEL_KEYS.PRODUCT_ADD_INPUTS_VALUE,
      predicate(this.dataModel[DATA_MODEL_KEYS.PRODUCT_ADD_INPUTS_VALUE])
    );
  }

  setVendingMachineChargeInputsValue(predicate) {
    this.setDataModelPropertyValue(
      DATA_MODEL_KEYS.VENDING_MACHINE_CHARGE_INPUTS_VALUE,
      predicate(this.dataModel[DATA_MODEL_KEYS.VENDING_MACHINE_CHARGE_INPUTS_VALUE])
    );
  }

  setChargeInputsValue(predicate) {
    this.setDataModelPropertyValue(
      DATA_MODEL_KEYS.CHARGE_INPUTS_VALUE,
      predicate(this.dataModel[DATA_MODEL_KEYS.CHARGE_INPUTS_VALUE])
    );
  }

  setCoins(newCoins) {
    this.setDataModelPropertyValue(DATA_MODEL_KEYS.COINS, newCoins);
  }

  setChargeAmount(newChargeAmount) {
    this.setDataModelPropertyValue(DATA_MODEL_KEYS.CHARGE_AMOUNT, newChargeAmount);
  }

  setProductList(newProductList) {
    this.setDataModelPropertyValue(DATA_MODEL_KEYS.PRODUCT_LIST, newProductList);
  }

  setProductInProductList({ newProduct, position }) {
    this.dataModel[DATA_MODEL_KEYS.PRODUCT_LIST][position] = newProduct;
  }

  /** getter */
  getDataModel() {
    return this.dataModel;
  }

  getTab() {
    return this.dataModel[DATA_MODEL_KEYS.TAB];
  }

  getProductAddInputsValue() {
    return this.dataModel[DATA_MODEL_KEYS.PRODUCT_ADD_INPUTS_VALUE];
  }

  getProductAddInputValueById(id) {
    const inputsValue = this.getProductAddInputsValue();
    return inputsValue[id];
  }

  getChargeInputsValue() {
    return this.dataModel[DATA_MODEL_KEYS.CHARGE_INPUTS_VALUE];
  }

  getChargeInputValueById(id) {
    const inputsValue = this.getChargeInputsValue();
    return inputsValue[id];
  }

  getVendingMachineChargeInputsValue() {
    return this.dataModel[DATA_MODEL_KEYS.VENDING_MACHINE_CHARGE_INPUTS_VALUE];
  }

  getVendingMachineChargeInputValueByInputId(id) {
    const inputsValue = this.getVendingMachineChargeInputsValue();
    return inputsValue[id];
  }

  getCoins() {
    return this.dataModel[DATA_MODEL_KEYS.COINS];
  }

  getChargeAmount() {
    return this.dataModel[DATA_MODEL_KEYS.CHARGE_AMOUNT];
  }

  getProductList() {
    return this.dataModel[DATA_MODEL_KEYS.PRODUCT_LIST];
  }

  findProduct(productId) {
    const position = this.getProductList().findIndex((product) => product.id === productId);

    return {
      targetProduct: this.dataModel[DATA_MODEL_KEYS.PRODUCT_LIST][position],
      position,
    };
  }
}
export default VendingMachineModel;
