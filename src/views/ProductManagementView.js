import { on, qs } from '../utils/index.js';
import View from './View.js';

export default class ProductManagementView extends View {
  constructor(element = qs('#product-purchase-view')) {
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

    this.productNameInput = qs('#product-name-input');
    this.productPriceInput = qs('#product-price-input');
    this.productQuantityInput = qs('#product-quantity-input');
    this.productAddButton = qs('#product-add-button');

    this.bindEvents();
  }

  bindEvents() {
    on(this.productAddButton, 'click', () => {
      console.log('click');
      const name = this.productNameInput.value;
      const price = this.productPriceInput.value;
      const quantity = this.productQuantityInput.value;

      const product = { name, price, quantity };
      this.emit('@addProduct', { product });

      this.clearInput();
    });
  }

  clearInput() {
    this.productNameInput.value = null;
    this.productPriceInput.value = null;
    this.productQuantityInput.value = null;
  }
}

class Template {
  getInitialElements() {
    return `<h3>상품 추가하기</h3>
      <div>
        <input id="product-name-input" type="text" placeholder="상품명"/>
        <input id="product-price-input" type="number" placeholder="가격"/>
        <input id="product-quantity-input" type="number" placeholder="수량"/>
        <button id="product-add-button">추가하기</button>
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
            <th>수량</th>
            <th>가격</th>
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
      <tr class="product-manage-item">
        <td class="product-manage-name">${name}</td>
        <td class="product-manage-price">${price}</td>
        <td class="product-manage-quantity">${quantity}</td>
      </tr>
    `;
  }
}
