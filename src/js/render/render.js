// prettier-ignore
import { renderMain, renderFormTypes, renderTableTypes , renderAmountSpan } from './common.js';
import { $ } from '../util/dom.js';
import { COINS, COINS_PRICE } from '../constant/constant.js';
import { store } from '../store/store.js';
import { localStorageConstants } from '../constant/localstorage.js';
import {
  addProductFormConstants,
  chargeChangesFormConstants,
  inputAmountFormConstants,
  productItemsTableConstants,
  coinItemsTableConstants,
  purchasableProductItemsTableConstants,
  changesCoinItemsTableConstants,
  chargeChangesSpanConstants,
  inputtedAmountSpanConstants,
} from '../constant/string.js';

export const renderProductAddMenu = () => {
  renderMain();
  renderFormTypes(addProductFormConstants);
  renderTableTypes(productItemsTableConstants);
  renderProductItems();
};
export const renderVendingMachineManageMenu = () => {
  renderMain();
  renderFormTypes(chargeChangesFormConstants);
  renderAmountSpan(chargeChangesSpanConstants, localStorageConstants.CHANGES);
  renderTableTypes(coinItemsTableConstants);
  renderCoinsItems();
};
export const renderProductPurchaseMenu = () => {
  renderMain();
  renderFormTypes(inputAmountFormConstants);
  renderAmountSpan(
    inputtedAmountSpanConstants,
    localStorageConstants.INPUT_AMOUNT,
  );
  renderTableTypes(purchasableProductItemsTableConstants);
  renderPurchableProductItems();
  renderTableTypes(changesCoinItemsTableConstants);
  renderChangesCoinsItems();
};

// productAddMenu
export const renderProductItems = () => {
  const menu = store.getItem(localStorageConstants.MENU);
  if (menu === null) {
    return;
  }
  const template = menu.map(item => {
    return `
      <tr>
        <td class='table-item' id='product-manage-name'>${item.name}</td>
        <td class='table-item' id='product-manage-price'>${item.price}</td>
        <td class='table-item' id='product-manage-quantity'>${item.quantity}</td>
      </tr>
    `;
  });
  $('tbody').innerHTML = template.join('');
};

//VendingMachineManageMenu
export const renderCoinsItems = () => {
  $('tbody').innerHTML = '';
  for (let i = 0; i < COINS.length; i++) {
    let numberOfCoin = store.getItem(COINS[i]);
    if (numberOfCoin === null) {
      numberOfCoin = 0;
    }
    $('tbody').innerHTML += `
        <tr>
          <td class='table-item'>${COINS_PRICE[i]}</td>
          <td class='table-item' id='vending-machine-coin-${COINS_PRICE[i]}-quantity'>${numberOfCoin}개</td>
        </tr>
      `;
  }
};

//ProductPurchaseMenu
export const renderPurchableProductItems = () => {
  const menu = store.getItem(localStorageConstants.MENU);
  if (menu !== null) {
    const template = menu.map(item => {
      return `
        <tr>
          <td class='table-item product-purchase-name' data-product-name='${item.name}'>${item.name}</td>
          <td class='table-item product-purchase-price' data-product-price='${item.price}'>${item.price}</td>
          <td class='table-item product-purchase-quantity' data-product-quantity='${item.quantity}'>${item.quantity}</td>
          <td class='table-item'><button class='purchase-button'>구매하기</button></td>
        </tr>
      `;
    });
    $('#purchasable-product-table-body').innerHTML = template.join('');
  }
};
export const renderChangesCoinsItems = () => {
  $('#changes-coins-table-body').innerHTML = '';
  for (let i = 0; i < COINS.length; i++) {
    let numberOfCoins = store.getItem(COINS[i]);
    if (numberOfCoins === null) {
      numberOfCoins = 0;
    }
    $('#changes-coins-table-body').innerHTML += ` 
      <tr>
        <td class='table-item'>${COINS_PRICE[i]}</td>
        <td class='table-item' id='coin-${COINS_PRICE[i]}-quantity'>${numberOfCoins}개</td>
      </tr>`;
  }
};
