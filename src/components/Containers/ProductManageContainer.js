import {ID, STORAGE_KEY} from '../../utils/constants.js';
import {createInputElement} from '../../utils/domUtil.js';
import {getLocalStorage} from '../../utils/localStorage.js';
import Component from '../core/Component.js';

export default class ProductManageContainer extends Component {
  init() {
    this.$state = {products: getLocalStorage(STORAGE_KEY.PRODUCT_MANAGE)};
  }

  mounted() {
    this.$state = {products: getLocalStorage(STORAGE_KEY.PRODUCT_MANAGE)};
    this.$target.querySelector(`.product-manage-table-container`).innerHTML = this.printProductTable();
  }

  template() {
    return `
    <div>
      <h2>상품 추가하기</h2>
      ${this.printProductForm()}
    </div>
    <div>
      <h2>상품 현황</h2>
      <div class="product-manage-table-container"></div>
    </div>
    `;
  }

  printProductForm() {
    return `
        <form id="product-manage-form">
          ${createInputElement('text', ID.PRODUCT_NAME_INPUT, '상품명')}
          ${createInputElement('number', ID.PRODUCT_PRICE_INPUT, '가격')}
          ${createInputElement('number', ID.PRODUCT_QUANTITY_INPUT, '수량')}
          <button id=${ID.PRODUCT_ADD_BUTTON}>추가하기</button>
        </form>
    `;
  }
}
