import { CLASS, ID, LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage } from '../localStorage.js';

export const productInputTemplate = () => {
  return `
    <h3>상품 추가하기</h3>
    <input id=${ID.PRODUCT_NAME_INPUT} type="text" placeholder="상품명" />
    <input id=${ID.PRODUCT_PRICE_INPUT} type="number" placeholder="가격" />
    <input id=${ID.PRODUCT_QUANTITY_INPUT} type="number" placeholder="수량" />
    <button id=${ID.PRODUCT_ADD_BUTTON}>추가하기</button>
  `;
};

const productTableHeader = `
  <tr>
    <td>상품명</td>
    <td>가격</td>
    <td>수량</td>
  </tr>
`;

const productTableRows = list => {
  let html = '';
  list.map(({ name, price, quantity }) => {
    html += `
        <tr class=${CLASS.PRODUCT_MANAGE_ITEM}>
          <td class=${CLASS.PRODUCT_MANAGE_NAME}>${name}</td>
          <td class=${CLASS.PRODUCT_MANAGE_PRICE}>${price}</td>
          <td class=${CLASS.PRODUCT_MANAGE_QUANTITY}>${quantity}</td>
        </tr>
      `;
  });

  return html;
};

export const productTableTemplate = () => {
  return `
    <h3>상품 현황</h3>
    <table border="1">
      ${productTableHeader}
      ${productTableRows(getLocalStorage(LOCAL_DB.PRODUCT))}
    </table>
  `;
};
