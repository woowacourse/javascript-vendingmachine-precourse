import View from './View.js';
import { ELEMENT_ID, ELEMENT_SID, EVENT_TYPE, PRODUCT } from '../utils/constants.js';
import { $ } from '../utils/dom.js';

import ManageProductModel from '../models/ManageProductModel.js';

const ManageProductView = { ...View };

ManageProductView.setup = function (element) {
  this.init(element);
  this.bindCLick();
  return this;
};
ManageProductView.render = function () {
  this.element.innerHTML = `
    <h4>상품 추가하기</h4>
    <div>
      <input placeholder=${PRODUCT.NAME} id=${ELEMENT_ID.PRODUCT_NAME_INPUT} type="text"/>
      <input placeholder=${PRODUCT.PRICE} id=${ELEMENT_ID.PRODUCT_PRICE_INPUT} type="number"/>
      <input placeholder=${PRODUCT.QUANTITY} id=${ELEMENT_ID.PRODUCT_QUANTITY_INPUT} type="number"/>
      <button id=${ELEMENT_ID.PRODUCT_ADD_BUTTON}>추가하기</button>
    </div>
    <h4>상품 현황</h4>
    <table>
      <thead> 
        <tr>
          <th>${PRODUCT.NAME}</th>
          <th>${PRODUCT.PRICE}</th>
          <th>${PRODUCT.QUANTITY}</th>
        <tr/>
      </thead>
    </table>
    `;
  this.productNameInput = $(ELEMENT_SID.PRODUCT_NAME_INPUT);
  this.productPriceInput = $(ELEMENT_SID.PRODUCT_PRICE_INPUT);
  this.productQuantityInput = $(ELEMENT_SID.PRODUCT_QUANTITY_INPUT);
  this.addProductButton = $(ELEMENT_SID.PRODUCT_ADD_BUTTON);
};
ManageProductView.bindCLick = function () {
  this.element.addEventListener('click', (e) => {
    if (e.target.id === ELEMENT_ID.PRODUCT_ADD_BUTTON) {
      e.preventDefault();
      this.onClickAddProduct();
    }
  });
};
ManageProductView.onClickAddProduct = function () {
  this.emit(EVENT_TYPE.ADD_PRODUCT, {
    product: {
      [PRODUCT.NAME]: this.productNameInput.value,
      [PRODUCT.PRICE]: this.productPriceInput.value,
      [PRODUCT.QUANTITY]: this.productQuantityInput.value,
    },
  });
};

export default ManageProductView;
