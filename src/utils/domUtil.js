import {CLASS} from './constants.js';

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

export const createTable = (menu, ths, tableData) => {
  return `
  <table>
    <thead>
      ${createTableHead(ths)}
    </thead>
    <tbody>
      ${createProductManageTable(tableData)}
    </tbody>
  </table>
  `;
};
