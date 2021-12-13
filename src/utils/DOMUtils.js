import { default as DB } from '../model/database.js';
import { default as UT } from './utils.js';
import { default as UI } from '../views/templates.js';

export const $ = selector => document.querySelector(selector);

export const $$ = selector => document.querySelectorAll(selector);

const DOMUtils = {
  initElement: selector => {
    $(selector).innerHTML = '';
  },

  initProductInput: () => {
    Array.from($('#product-add-form').children).forEach(element => {
      if (element.tagName === 'INPUT') element.value = '';
    });
  },

  getProduct: () => {
    return {
      name: $('#product-name-input').value,
      price: $('#product-price-input').value,
      quantity: $('#product-quantity-input').value,
    };
  },

  getCharge: () => {
    return {
      vendingMachine: $('#vending-machine-charge-input').value,
      toPurchaseProduct: $('#charge-input').value,
    };
  },

  showInventory: () => {
    $('#product-inventory').innerHTML = DB.load('inventory')
      .map(product => UI.inventoryTableRowHTML(product))
      .join('');
  },

  showIntentoryToPurchaseProduct: () => {
    $('#product-purchase-inventory').innerHTML = DB.load('inventory')
      .map(product => UI.purchaseInventoryTableRowHTML(product))
      .join('');
  },

  hideComponents: () => {
    Array.from($('#component').children).forEach(menu => (menu.style.display = 'none'));
  },

  showComponent: id => {
    DOMUtils.hideComponents();

    $(UT.changeIdToComponent(id)).style.display = 'block';
  },

  showVendingMachineCharge: () => {
    const charge = UT.calculateToCharge(DB.load('vendingMachineCoins'));

    if (UT.isZero(charge)) return DOMUtils.initVendingMachineCharge();

    $('#vending-machine-charge-amount').innerHTML = `${charge}`;
    $('#vending-machine-monetary-unit').innerHTML = '원';
  },

  initVendingMachineCharge: () => {
    DOMUtils.initElement('#vending-machine-charge-amount');
    DOMUtils.initElement('#vending-machine-monetary-unit');
  },

  showVendingMachineCoins: () => {
    if (UT.isAllZero('vendingMachineCoins')) return DOMUtils.initVendingMachineCoins();

    UT.insertHypen(DB.load('vendingMachineCoins')).forEach(array => {
      const [coinType, quantity] = array;

      $(`#vending-machine-${coinType}-quantity`).innerHTML = `${quantity}개`;
    });
  },

  initVendingMachineCoins: () => {
    UT.insertHypen(DB.load('vendingMachineCoins')).forEach(array => {
      const [coinType] = array;

      $(`#vending-machine-${coinType}-quantity`).innerHTML = '';
    });
  },

  showReturnCoins: object => {
    UT.insertHypen(object).forEach(array => {
      const [coinType, quantity] = array;

      $(`#${coinType}-quantity`).innerHTML = `${quantity}개`;
    });
  },

  showChargeToPurchaseProduct: () => {
    const charge = DB.load('chargeToPurchaseProduct');

    if (UT.isZero(charge)) return DOMUtils.initChargeToPurchaseProduct();

    $('#charge-amount').innerHTML = charge;
    $('#monetary-unit').innerHTML = '원';
  },

  initChargeToPurchaseProduct: () => {
    DOMUtils.initElement('#charge-amount');
    DOMUtils.initElement('#monetary-unit');
  },
};

export default DOMUtils;
