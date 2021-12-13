import { PRODUCT_MANAGEMENT } from '../constants/selector.js';

function inputName() {
  return `
      <input
      type="text"
      id="${PRODUCT_MANAGEMENT.ID.PRODUCT_NAME_INPUT}"
      placeholder="상품명"
    />
  `;
}

function inputPrice() {
  return `
      <input
      type="number"
      id="${PRODUCT_MANAGEMENT.ID.PRODUCT_PRICE_INPUT}"
      placeholder="가격"
    />
  `;
}

function inputQuantity() {
  return `
      <input
      type="number"
      id="${PRODUCT_MANAGEMENT.ID.PRODUCT_QUANTITY_INPUT}"
      placeholder="수량"
    />
  `;
}

export default function productInput() {
  return `
      <h2>상품 추가하기</h2>
      <form>
        ${inputName()}
        ${inputPrice()}
        ${inputQuantity()}
        <button type="button" id="${PRODUCT_MANAGEMENT.ID.PRODUCT_ADD_BUTTON}">
        추가하기
        </button>
      </form>
      <br>
    `;
}
