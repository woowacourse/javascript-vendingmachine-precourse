import { $ } from '../utils/DOM.js';
import { printProductTemplate, PRODUCT_BASIC_TEMPLATE } from '../utils/template.js';

export class ProductView {
  constructor() {
    this.$productAddSection = $('#product-add-section');
    this.$productNameInput;
    this.$productPriceInput;
    this.$productQuantityInput;
    this.$productAddButton;
    this.$productTable;
    this.addElements();
  }

  setOnProductSubmit(fn) {
    this.$productAddButton.addEventListener('click', (e) => {
      e.preventDefault();
      const product = this.$productNameInput.value;
      const price = this.$productPriceInput.value;
      const quantity = this.$productQuantityInput.value;
      fn(product, price, quantity);
    });
  }

  showProduct(products) {
    if (products.length === 0) {
      return;
    }
    let productRowHTML = PRODUCT_BASIC_TEMPLATE;
    products.map((product) => (productRowHTML += printProductTemplate(product)));
    this.$productTable.innerHTML = productRowHTML;
  }

  // <table>
  //         <tr class="product-manage-item">
  //           <td class="product-manage-name">상품명</td>
  //           <td class="product-manage-price">가격</td>
  //           <td class="product-manage-quantity">수량</td>
  //         </tr>
  //         <tr class="product-manage-item">
  //           <td class="product-manage-name">콜라</td>
  //           <td class="product-manage-price">1500</td>
  //           <td class="product-manage-quantity">20</td>
  //         </tr>
  //         <tr class="product-manage-item">
  //           <td class="product-manage-name">콜라</td>
  //           <td class="product-manage-price">1500</td>
  //           <td class="product-manage-quantity">20</td>
  //         </tr>
  //       </table>

  addElements() {
    this.$productAddSection.innerHTML = `
      <h3>상품 추가하기</h3>
      <form>
        <input type="text" id="product-name-input" placeholder="상품명" />
        <input type="number" id="product-price-input" placeholder="가격" />
        <input type="number" id="product-quantity-input" placeholder="수량" />
        <button id="product-add-button">추가하기</button>
      </form>
      <h3>상품 현황</h3>
      <table id="product-manage-table">
        <tr class="product-manage-item">
          <td class="product-manage-name">상품명</td>
          <td class="product-manage-price">가격</td>
          <td class="product-manage-quantity">수량</td>
        </tr>
      </table>
    `;
    this.$productNameInput = $('#product-name-input');
    this.$productPriceInput = $('#product-price-input');
    this.$productQuantityInput = $('#product-quantity-input');
    this.$productAddButton = $('#product-add-button');
    this.$productTable = $('#product-manage-table');
  }
}
