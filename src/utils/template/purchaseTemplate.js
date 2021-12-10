import { CLASS, ID, LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage } from '../localStorage.js';

export const purchaseInputTemplate = () => {
  return `
    <h3>금액 투입</h3>
    <input id=${ID.CHARGE_INPUT} type="number" placeholder="투입할 금액" />
    <button id=${ID.CHARGE_BUTTON}>투입하기</button>
  `;
};

const totalCharge = () => {
  const total = getLocalStorage(LOCAL_DB.PURCHASE);
  if (total === 0) {
    return '';
  }

  return total;
};

export const totalPurchaseTemplate = () => {
  return `
    <p id=${ID.CHARGE_AMOUNT}>투입한 금액: ${totalCharge()}</p>
  `;
};

const purchaseTableHeader = `
  <tr>
    <td>상품명</td>
    <td>가격</td>
    <td>수량</td>
    <td>구매</td>
  </tr>
`;

const purchaseTableRows = list => {
  let html = '';
  list.map(({ name, price, quantity }) => {
    html += `
      <tr class=${CLASS.PRODUCT_PURCHASE_ITEM}>
        <td data-product-name=${name} class=${CLASS.PRODUCT_PURCHASE_NAME}>${name}</td>
        <td data-product-price=${price} class=${CLASS.PRODUCT_PURCHASE_PRICE}>${price}</td>
        <td data-product-quantity=${quantity} class=${CLASS.PRODUCT_PURCHASE_QUANTITY}>${quantity}</td>
        <td><button class=${CLASS.PURCHASE_BUTTON}>구매하기</button></td>
      </tr>
    `;
  });

  return html;
};

export const purchaseTableTemplate = () => {
  return `
    <h3>구매할 수 있는 상품 현황</h3>
    <table border="1">
      ${purchaseTableHeader}
      ${purchaseTableRows(getLocalStorage(LOCAL_DB.PRODUCT))}
    </table>
  `;
};
