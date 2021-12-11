import { PRODUCT_MENU } from '../../data/elementData.js';

export default class ProductMenu {
  constructor() {
    this.$main = document.createElement('main');
    this.template = this.productMenuTemplate();
    this.closeMenu();
  }

  closeMenu() {
    this.$main.style.display = 'none'
  }

  showMenu() {
    this.$main.style.display = 'block';
  }

  productMenuTemplate() {
    this.$main.insertAdjacentHTML('beforeend', `${this.inputTemplate()}${this.productTableTemplate()}`);
  }

  inputTemplate() {
    return `<h3>상품 추가하기</h3>
      <form>
        <input type="text" id="${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_NAME_INPUT}" placeholder="상품명">
        <input type="number" id="${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_PRICE_INPUT}" min="100" step="10" placeholder="가격">
        <input type="number" id="${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_QUANTITY_INPUT}" placeholder="수량">
        <button id="${PRODUCT_MENU.INPUT_SELECTOR.PRODUCT_ADD_BUTTON}">추가하기</button>
      </form>`;
  }

  productTableTemplate() {
    return `<h3>상품 현황</h3>
      <table style="border-collapse: collapse;" width=400 border="1">
      <thead style="text-align: center;">
        <tr>
          <td>상품명</td>
          <td>가격</td>
          <td>수량</td>
        </tr>
      </thead>
      <tbody style="text-align: center;">
      </tbody>
      </table>`;
  }

  productItemTemplate() {
    return `<tr id="${PRODUCT_MENU.TABLE_SELECTOR.ITEM}">
        <td id="${PRODUCT_MENU.TABLE_SELECTOR.PRODUCT_NAME}"></td>
        <td id="${PRODUCT_MENU.TABLE_SELECTOR.PRODUCT_PRICE}"></td>
        <td id="${PRODUCT_MENU.TABLE_SELECTOR.PRODUCT_QUANTITY}"></td>
      </tr>`;
  }
}
