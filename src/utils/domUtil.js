/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import {CLASS, ID, TABLE_MENU} from './constants.js';
import {cellStyle, tableStyle} from './style.js';

export const createInputElement = (type, id, placeholder) => {
  return `
  <input type=${type ? type : 'text'} id=${id ? id : ''} placeholder='${placeholder ? placeholder : ''}' />
  `;
};

const createTableHead = (ths) => {
  return `
  ${ths.map((th) => `<th style='${cellStyle}'> ${th} </th>`).join('')}
  `;
};

export const createProductManageTable = (tableDataList) => {
  return `
  ${tableDataList
    .map(
      ({name, price, quantity}) => `
    <tr class=${CLASS.PRODUCT_MANAGE_ITEM}>
      <td style='${cellStyle}' class=${CLASS.PRODUCT_MANAGE_NAME}>${name}</td>
      <td style='${cellStyle}' class=${CLASS.PRODUCT_MANAGE_PRICE}>${price}</td>
      <td style='${cellStyle}' class=${CLASS.PRODUCT_MANAGE_QUANTITY}>${quantity}</td>
    </tr>
    `
    )
    .join('')}
  `;
};

export const createVendingMachineChargeTable = () => {
  return `
      <tr>
        <td style='${cellStyle}'>500원</td>
        <td style='${cellStyle}' id=${ID.VENDING_MACHINE_COIN_500_QUANTITY}></td>
      </tr>
      <tr>
        <td style='${cellStyle}'>100원</td>
        <td style='${cellStyle}' id=${ID.VENDING_MACHINE_COIN_100_QUANTITY}></td>
      </tr>
      <tr>
        <td style='${cellStyle}'>50원</td>
        <td style='${cellStyle}' id=${ID.VENDING_MACHINE_COIN_50_QUANTITY}></td>
      </tr>
      <tr>
        <td style='${cellStyle}'>10원</td>
        <td style='${cellStyle}' id=${ID.VENDING_MACHINE_COIN_10_QUANTITY}></td>
      </tr>
  `;
};

export const createPurchaseChargeTable = () => {
  return `
      <tr>
        <td style='${cellStyle}'>500원</td>
        <td style='${cellStyle}' id=${ID.COIN_500_QUANTITY}></td>
      </tr>
      <tr>
        <td style='${cellStyle}'>100원</td>
        <td style='${cellStyle}' id=${ID.COIN_100_QUANTITY}></td>
      </tr>
      <tr>
        <td style='${cellStyle}'>50원</td>
        <td style='${cellStyle}' id=${ID.COIN_50_QUANTITY}></td>
      </tr>
      <tr>
        <td style='${cellStyle}'>10원</td>
        <td style='${cellStyle}' id=${ID.COIN_10_QUANTITY}></td>
      </tr>
  `;
};

export const createPurchaseTable = (tableDataList) => {
  return `
  ${tableDataList
    .map(
      ({name, price, quantity}, index) => `
    <tr class=${CLASS.PRODUCT_PURCHASE_ITEM}>
      <td style='${cellStyle}' class=${CLASS.PRODUCT_PURCHASE_NAME} data-product-name=${name}>${name}</td>
      <td style='${cellStyle}' class=${CLASS.PRODUCT_PURCHASE_PRICE} data-product-price=${price}>${price}</td>
      <td style='${cellStyle}' class=${CLASS.PRODUCT_PURCHASE_QUANTITY} data-product-quantity=${quantity}>${quantity}</td>
      <td style='${cellStyle}'>
        <button class=${CLASS.PRODUCT_PURCHASE_BUTTON} data-index=${index}>구매하기</button>
      </td>
    </tr>
    `
    )
    .join('')}
  `;
};

export const createTable = (menu, ths, tableData) => {
  return `
  <table style='${tableStyle}'>
    <thead>
      ${createTableHead(ths)}
    </thead>
    <tbody>
      ${
        menu === TABLE_MENU.PRODUCT_MANAGE
          ? createProductManageTable(tableData)
          : menu === TABLE_MENU.VENDING_MACHINE_CHARGE
          ? createVendingMachineChargeTable()
          : menu === TABLE_MENU.PURCHASE
          ? createPurchaseTable(tableData)
          : createPurchaseChargeTable()
      }
    </tbody>
  </table>
  `;
};
