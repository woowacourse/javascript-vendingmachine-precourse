import { default as DB } from '../model/database.js';
import { default as UT } from '../utils/utils.js';

export const $ = selector => document.querySelector(selector);

export const $$ = selector => document.querySelectorAll(selector);

const DOMUtils = {
  initElement: selector => {
    $(selector).innerHTML = '';
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
      .map(
        product =>
          `<tr class="product-manage-item">
            <td class="product-manage-name" style="padding:10px; text-align:center;">${product.name}</td>
            <td class="product-manage-price" style="padding:10px; text-align:center;">${product.price}</td>
            <td class="product-manage-quantity" style="padding:10px; text-align:center;">${product.quantity}</td>
          </tr>`,
      )
      .join('');
  },

  showIntentoryToPurchaseProduct: () => {
    $('#product-purchase-inventory').innerHTML = DB.load('inventory')
      .map(
        product =>
          `<tr class="product-purchase-item">
            <td data-product-name="${product.name}" class="product-purchase-name" style="padding:10px; text-align:center;">${product.name}</td>
            <td data-product-price="${product.price}" class="product-purchase-price" style="padding:10px; text-align:center;">${product.price}</td>
            <td data-product-quantity="${product.quantity}" class="product-purchase-quantity" style="padding:10px; text-align:center;">${product.quantity}</td>
            <td style="padding:10px; text-align:center;">
              <button class="purchase-button">구매하기</button>
            </td>
          </tr>`,
      )
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

    if (charge > 0) {
      return ($('#vending-machine-charge-amount').innerHTML = `${charge}원`);
    }
    DOMUtils.initElement('#vending-machine-charge-amount');
  },

  showVendingMachineCoins: () => {
    if (UT.isAllZero('vendingMachineCoins')) {
      return UT.convertStringToIncludingHyphen('vendingMachineCoins').forEach(array => {
        const [coinType] = array;

        $(`#vending-machine-${coinType}-quantity`).innerHTML = '';
      });
    }

    UT.convertStringToIncludingHyphen('vendingMachineCoins').forEach(array => {
      const [coinType, quantity] = array;

      $(`#vending-machine-${coinType}-quantity`).innerHTML = `${quantity}개`;
    });
  },

  showReturnCoins: () => {
    UT.convertStringToIncludingHyphen('vendingMachineCoins').forEach(array => {
      const [coinType, quantity] = array;

      $(`#${coinType}-quantity`).innerHTML = `${quantity}개`;
    });
  },

  showChargeToPurchaseProduct: () => {
    const charge = DB.load('chargeToPurchaseProduct');

    if (charge > 0) {
      $('#charge-amount').innerHTML = charge;
      $('#monetary-unit').innerHTML = '원';
      return;
    }
    DOMUtils.initElement('#charge-amount');
    DOMUtils.initElement('#monetary-unit');
  },

  getAllPurchaseButton: () => {
    $$('.purchase-button').forEach(button => UT.addPurchaseButtonEvent(button));
  },
};

export default DOMUtils;
