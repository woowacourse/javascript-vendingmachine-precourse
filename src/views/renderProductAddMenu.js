import { $ } from '../dom/dom.js';
import renderNowProductInfo from './renderNowProductInfo.js';

function createProductInputElement() {
  return `
  <h2> 상품 추가하기 </h2>
  <div>
    <input id="product-name-input" placeholder="상품명"/>
    <input id="product-price-input" placeholder="가격" />
    <input id="product-quantity-input" placeholder="수량" />
    <button id="product-add-button">추가하기</button>
  </div>
  <h2> 상품 현황 </h2>
  <div class="now-product-table-container"></div>
  `;
}

export default function renderProdutAddMenu() {
  $('.tab-content-container').innerHTML = createProductInputElement();
  renderNowProductInfo();
}
