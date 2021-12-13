import { default as DB } from '../model/database.js';
import { default as UT } from './utils.js';
import { default as UI } from '../views/templates.js';
import { SELECTOR } from '../constants/selectors.js';
import { STORAGE, WORD } from '../constants/constants.js';

export const $ = selector => document.querySelector(selector);

export const $$ = selector => document.querySelectorAll(selector);

const DOMUtils = {
  initElement: selector => {
    $(selector).innerHTML = '';
  },

  initProductInput: () => {
    Array.from($(SELECTOR.PRODUCT_ADD_FORM).children).forEach(element => {
      if (element.tagName === WORD.INPUT) element.value = '';
    });
  },

  getProduct: () => {
    return {
      name: $(SELECTOR.PRODUCT_NAME_INPUT).value,
      price: $(SELECTOR.PRODUCT_PRICE_INPUT).value,
      quantity: $(SELECTOR.PRODUCT_QUANTITY_INPUT).value,
    };
  },

  getCharge: () => {
    return {
      vendingMachine: $(SELECTOR.COIN_CHARGE_INPUT).value,
      toPurchaseProduct: $(SELECTOR.PURCHASE_CHARGE_INPUT).value,
    };
  },

  showInventory: () => {
    $(SELECTOR.PRODUCT_INVENTORY).innerHTML = DB.load(STORAGE.INVENTORY.NAME)
      .map(product => UI.inventoryTableRowHTML(product))
      .join('');
  },

  showIntentoryToPurchaseProduct: () => {
    $(SELECTOR.PURCHASE_INVENTORY).innerHTML = DB.load(STORAGE.INVENTORY.NAME)
      .map(product => UI.purchaseInventoryTableRowHTML(product))
      .join('');
  },

  hideComponents: () => {
    Array.from($(SELECTOR.COMPONENT).children).forEach(menu => (menu.style.display = 'none'));
  },

  showComponent: id => {
    DOMUtils.hideComponents();

    $(UT.changeIdToComponent(id)).style.display = WORD.BLOCK;
  },

  showVendingMachineCharge: () => {
    const charge = UT.calculateToCharge(DB.load(STORAGE.COIN.NAME));

    if (UT.isZero(charge)) return DOMUtils.initVendingMachineCharge();

    $(SELECTOR.COIN_CHARGE_AMOUNT).innerHTML = `${charge}`;
    $(SELECTOR.COIN_CHARGE_UNIT).innerHTML = WORD.WON;
  },

  initVendingMachineCharge: () => {
    DOMUtils.initElement(SELECTOR.COIN_CHARGE_AMOUNT);
    DOMUtils.initElement(SELECTOR.COIN_CHARGE_UNIT);
  },

  showVendingMachineCoins: () => {
    if (UT.isAllZero(STORAGE.COIN.NAME)) return DOMUtils.initVendingMachineCoins();

    UT.insertHypen(DB.load(STORAGE.COIN.NAME)).forEach(array => {
      const [coinType, quantity] = array;

      $(SELECTOR.MAKE_COIN_ID(coinType)).innerHTML = `${quantity}${WORD.EA}`;
    });
  },

  initVendingMachineCoins: () => {
    UT.insertHypen(DB.load(STORAGE.COIN.NAME)).forEach(array => {
      const [coinType] = array;

      $(SELECTOR.MAKE_COIN_ID(coinType)).innerHTML = '';
    });
  },

  showReturnCoins: object => {
    UT.insertHypen(object).forEach(array => {
      const [coinType, quantity] = array;

      $(SELECTOR.MAKE_COIN_QUANTITY_ID(coinType)).innerHTML = `${quantity}${WORD.EA}`;
    });
  },

  showChargeToPurchaseProduct: () => {
    const charge = DB.load(STORAGE.CHARGE.NAME);

    if (UT.isZero(charge)) return DOMUtils.initChargeToPurchaseProduct();

    $(SELECTOR.PURCHASE_CHARGE_AMOUNT).innerHTML = charge;
    $(SELECTOR.PURCHASE_CHARGE_UNIT).innerHTML = WORD.WON;
  },

  initChargeToPurchaseProduct: () => {
    DOMUtils.initElement(SELECTOR.PURCHASE_CHARGE_AMOUNT);
    DOMUtils.initElement(SELECTOR.PURCHASE_CHARGE_UNIT);
  },
};

export default DOMUtils;
