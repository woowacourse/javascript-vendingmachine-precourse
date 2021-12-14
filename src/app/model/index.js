import {
  DATA_MODEL_KEYS,
  DOM,
  LOCALSTORAGE_DATA_MODEL_KEY,
  PLAIN_TEXT,
  TAB,
} from '../../lib/constants.js';
import Coin from '../../modules/coin.js';
import store from '../../modules/store.js';
export const defaultValueGenerators = {
  [`${DATA_MODEL_KEYS.TAB}`]: () => TAB.PRODUCT_ADD_MENU,

  [`${DATA_MODEL_KEYS.PRODUCT_ADD_INPUTS_VALUE}`]: () => ({
    [`${DOM.PRODUCT_NAME_INPUT}`]: PLAIN_TEXT,
    [`${DOM.PRODUCT_PRICE_INPUT}`]: PLAIN_TEXT,
    [`${DOM.PRODUCT_QUANTITY_INPUT}`]: PLAIN_TEXT,
  }),

  [`${DATA_MODEL_KEYS.PRODUCT_LIST}`]: () => [],

  [`${DATA_MODEL_KEYS.VENDING_MACHINE_CHARGE_INPUTS_VALUE}`]: () => ({
    [`${DOM.VENDING_MACHINE_CHARGE_INPUT}`]: PLAIN_TEXT,
  }),

  [`${DATA_MODEL_KEYS.VENDING_MACHINE_CHARGE}`]: () => 0,

  [`${DATA_MODEL_KEYS.COINS}`]: () => Coin.getDefaultCoins(),

  [`${DATA_MODEL_KEYS.CHARGE_INPUTS_VALUE}`]: () => ({
    [`${DOM.CHARGE_INPUT}`]: PLAIN_TEXT,
  }),

  [`${DATA_MODEL_KEYS.CHARGE_AMOUNT}`]: () => 0,
};
class VendingMachineModel {
  constructor() {
    this.setDataModel(store.getLocalStorage(LOCALSTORAGE_DATA_MODEL_KEY));
    this.initDataModel();
  }

  hasPreviousDataInDataModel(KEY) {
    return KEY in this.dataModel;
  }

  initDataModel() {
    Object.values(DATA_MODEL_KEYS).forEach((KEY) => {
      const defaultValueGenerator = defaultValueGenerators[KEY];
      const value = this.hasPreviousDataInDataModel(KEY)
        ? this.dataModel[KEY]
        : defaultValueGenerator();
      this.setDataModelPropertyValue(KEY, value);
    });
  }

  setDataModel(value) {
    this.dataModel = value ? value : {};
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
    const newProductList = [...this.getProductList()];
    newProductList[position] = newProduct;
    this.setDataModelPropertyValue(DATA_MODEL_KEYS.PRODUCT_LIST, newProductList);
  }

  setVendingMachineChargeAmount(newVendingMachineCharge) {
    this.setDataModelPropertyValue(DATA_MODEL_KEYS.VENDING_MACHINE_CHARGE, newVendingMachineCharge);
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

  getVendingMachineChargeAmount() {
    return this.dataModel[DATA_MODEL_KEYS.VENDING_MACHINE_CHARGE];
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
