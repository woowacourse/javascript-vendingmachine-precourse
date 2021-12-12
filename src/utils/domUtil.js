/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import {CLASS, ID, TABLE_MENU} from './constants.js';

export const createInputElement = (type, id, placeholder) => {
  return `
  <input type=${type ? type : 'text'} id=${id ? id : ''} placeholder=${placeholder ? placeholder : ''} />
  `;
};

const createTableHead = (ths) => {
  return `
  ${ths.map((th) => `<th> ${th} </th>`).join('')}
  `;
};

export const createProductManageTable = (tableDataList) => {
  return `
  ${tableDataList
    .map(
      ({name, price, quantity}) => `
    <tr class=${CLASS.PRODUCT_MANAGE_ITEM}>
      <td class=${CLASS.PRODUCT_MANAGE_NAME}>${name}</td>
      <td class=${CLASS.PRODUCT_MANAGE_PRICE}>${price}</td>
      <td class=${CLASS.PRODUCT_MANAGE_QUANTITY}>${quantity}</td>
    </tr>
    `
    )
    .join('')}
  `;
};

export const createChargeTable = () => {
  return `
      <tr>
        <td>500원</td>
        <td id=${ID.VENDING_MACHINE_COIN_500_QUANTITY}></td>
      </tr>
      <tr>
        <td>100원</td>
        <td id=${ID.VENDING_MACHINE_COIN_100_QUANTITY}></td>
      </tr>
      <tr>
        <td>50원</td>
        <td id=${ID.VENDING_MACHINE_COIN_50_QUANTITY}></td>
      </tr>
      <tr>
        <td>10원</td>
        <td id=${ID.VENDING_MACHINE_COIN_10_QUANTITY}></td>
      </tr>
  `;
};

export const createTable = (menu, ths, tableData) => {
  return `
  <table>
    <thead>
      ${createTableHead(ths)}
    </thead>
    <tbody>
      ${
        menu === TABLE_MENU.PRODUCT_MANAGE
          ? createProductManageTable(tableData)
          : menu === TABLE_MENU.CHARGE
          ? createChargeTable()
          : ''
      }
    </tbody>
  </table>
  `;
};
