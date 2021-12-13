import { DRINK_STORAGE_NAME } from '../constants/constants.js';
import {
  DRINK_MENU_KEY,
  DRINK_PRICE_KEY,
  DRINK_QUANTITY_KEY,
} from '../constants/drinkConstants.js';
import store from '../storage/store.js';
import { $ } from '../dom/dom.js';

function renderNowSellingTableContainer() {
  const drinkStorage = store.getLocalStorage(DRINK_STORAGE_NAME);
  const nowSellingProductTemplate = `
  <h2>구매할 수 있는 상품 현황</h2>
  <table>
    <tr><th>상품명</th><th>가격</th><th>수량</th><th>구매</th></tr>
    ${createNowSellingProductTable(drinkStorage)}
  </table>
  `;
  return nowSellingProductTemplate;
}

function createNowSellingProductTable(drinkStorage) {
  return drinkStorage
    .map((item, index) => {
      return `<tr class="product-purchase-item" data-product-index='${index}'>
    <td class="product-purchase-name" data-product-name='${item[DRINK_MENU_KEY]}'>${item[DRINK_MENU_KEY]}</td>
    <td class="product-purchase-price" data-product-price= '${item[DRINK_PRICE_KEY]}'>${item[DRINK_PRICE_KEY]}</td>
    <td class="product-purchase-quantity" data-product-quantity='${item[DRINK_QUANTITY_KEY]}'>${item[DRINK_QUANTITY_KEY]}</td>
    <td><button class="purchase-button">구매하기</button>
    </tr>`;
    })
    .join('');
}

export default function renderNowSellingProductTable() {
  $('.now-selling-product-table-cotainer').innerHTML =
    renderNowSellingTableContainer();
}
