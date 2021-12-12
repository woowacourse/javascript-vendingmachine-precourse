import { DRINK_STORAGE_NAME } from '../constants/constants.js';
import { $ } from '../dom/dom.js';
import store from '../storage/store.js';
import renderNowSellingProductTable from './renderNowSellingProductTable.js';

function renderCoinInputForm() {
  return `
  <h2>금액 투입</h2>
  <div>
    <input id="charge-input" placeholder="투입할 금액" />
    <button id="charge-button">투입하기</button>
  </div>
  <div>
    투입한 금액: <span id="charge-amount-id"></span>
  </div>
  <div class="now-selling-product-table-cotainer"></div>
  <div class="charge-table-container"></div>
  `;
}

function renderNowSellingProductTemplate(drinkStorage) {
  const nowSellingProductTemplate = `
  <h2>구매할 수 있는 상품 현황</h2>
  <table>
    <tr><th>상품명</th><th>가격</th><th>수량</th><th>구매</th></tr>
    ${renderNowSellingProductTable(drinkStorage)}
  </table>
  `;
  return nowSellingProductTemplate;
}

function renderChangeTable() {
  return `
  <h2>잔돈</h2>
  <button id="coin-return-button">반환하기</button>
  <table>
    <tr><th>동전</th><th>개수</th></tr>
    <tr><td>500원</td><td id="coin-500-quantity"></td></tr>
    <tr><td>100원</td><td id="coin-100-quantity"></td></tr>
    <tr><td>50원</td><td id="coin-50-quantity"></td></tr>
    <tr><td>10원</td><td id="coin-10-quantity"></td></tr>
  </table>
  `;
}
export default function renderProductPurchaseMenu() {
  $('.tab-content-container').innerHTML = renderCoinInputForm();
  const drinkStorage = store.getLocalStorage(DRINK_STORAGE_NAME);
  $('.now-selling-product-table-cotainer').innerHTML =
    renderNowSellingProductTemplate(drinkStorage);
  $('.charge-table-container').innerHTML = renderChangeTable();
}
