import { CLASS, CUSTOM_EVENT_NAME, ID, SELECTOR } from '../constants.js';
import { on, qs } from '../utils/index.js';
import { checkLengthLessThanZero, checkNumberLessThanZero, checkTenDigits } from '../utils/validation.js';
import View from './View.js';

export default class ProductManagementView extends View {
  constructor(element = qs(SELECTOR.PRODUCT_ADD_VIEW)) {
    super(element);
    this.template = new Template();

    this.initializeElements();
  }

  initializeElements() {
    this.element.innerHTML = this.template.getInitialElements();
  }

  show(data) {
    this.initializeElements();
    this.element.innerHTML += this.template.getProductList(data);

    this.productNameInput = qs(SELECTOR.PRODUCT_NAME_INPUT);
    this.productPriceInput = qs(SELECTOR.PRODUCT_PRICE_INPUT);
    this.productQuantityInput = qs(SELECTOR.PRODUCT_QUANTITY_INPUT);
    this.productAddButton = qs(SELECTOR.PRODUCT_ADD_BUTTON);

    this.bindEvents();
    super.show();
  }

  bindEvents() {
    on(this.productAddButton, 'click', () => this.handleProductAddButton());
  }

  handleProductAddButton() {
    const name = this.productNameInput.value;
    const price = this.productPriceInput.value;
    const quantity = this.productQuantityInput.value;

    if (checkLengthLessThanZero(name)) return;
    if (checkNumberLessThanZero(Number(price))) return;
    if (!checkTenDigits(Number(price))) return;
    if (checkNumberLessThanZero(Number(quantity))) return;

    const product = { name, price, quantity };
    this.emit(CUSTOM_EVENT_NAME.ADD_PRODUCT, { product });
  }
}

class Template {
  getInitialElements() {
    return `<h3>상품 추가하기</h3>
      <div>
        <input id="${ID.PRODUCT_NAME_INPUT}" type="text" placeholder="상품명"/>
        <input id="${ID.PRODUCT_PRICE_INPUT}" type="number" placeholder="가격"/>
        <input id="${ID.PRODUCT_QUANTITY_INPUT}" type="number" placeholder="수량"/>
        <button id="${ID.PRODUCT_ADD_BUTTON}">추가하기</button>
      </div>
    `;
  }

  getProductList(data) {
    return `
      <h3>상품 현황</h3>      
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          ${data.map((product) => this.getProduct(product)).join('')}
        </tbody>
      </table>
    `;
  }

  getProduct({ name, price, quantity }) {
    return `
      <tr class="${CLASS.PRODUCT_MANAGE_ITEM}">
        <td class="${CLASS.PRODUCT_MANAGE_NAME}">${name}</td>
        <td class="${CLASS.PRODUCT_MANAGE_PRICE}">${price}</td>
        <td class="${CLASS.PRODUCT_MANAGE_QUANTITY}">${quantity}</td>
      </tr>
    `;
  }
}
