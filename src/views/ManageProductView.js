import View from './View.js';
import { ELEMENT_ID, ELEMENT_SID, ELEMENT_CLASS, EVENT_TYPE, PRODUCT } from '../utils/constants.js';
import { $ } from '../utils/dom.js';

import ManageProductModel from '../models/ManageProductModel.js';

const ManageProductView = { ...View };

ManageProductView.setup = function (element) {
  this.init(element);
  this.bindCLick();
  return this;
};
ManageProductView.render = function () {
  this.element.innerHTML = this.template();
};
ManageProductView.template = function () {
  return `
  <h4>상품 추가하기</h4>
  <div>
    <input placeholder=${PRODUCT.NAME} id=${ELEMENT_ID.PRODUCT_NAME_INPUT} type="text"/>
    <input placeholder=${PRODUCT.PRICE} id=${ELEMENT_ID.PRODUCT_PRICE_INPUT} type="number"/>
    <input placeholder=${PRODUCT.QUANTITY} id=${ELEMENT_ID.PRODUCT_QUANTITY_INPUT} type="number"/>
    <button id=${ELEMENT_ID.PRODUCT_ADD_BUTTON}>추가하기</button>
  </div>
  <h4>상품 현황</h4>
  <table class="${ELEMENT_CLASS.TABLE_COMMON} ${ELEMENT_CLASS.PRODUCTS_TABLE}">
    <thead> 
      <tr>
        <th>${PRODUCT.NAME}</th>
        <th>${PRODUCT.PRICE}</th>
        <th>${PRODUCT.QUANTITY}</th>
      <tr/>
    </thead>
    <tbody>
      ${ManageProductModel.list()
        .map(
          (product) =>
            `<tr class=${ELEMENT_CLASS.PRODUCT_MANAGE_ITEM}>
          <td  class=${ELEMENT_CLASS.PRODUCT_MANAGE_NAME}>${product[PRODUCT.NAME]}</td>
          <td class=${ELEMENT_CLASS.PRODUCT_MANAGE_PRICE}>${product[PRODUCT.PRICE]}</td>
          <td class=${ELEMENT_CLASS.PRODUCT_MANAGE_QUANTITY}>${product[PRODUCT.QUANTITY]}</td>
        </tr>`,
        )
        .join('')}
    </tbody>
  </table>
  `;
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
      [PRODUCT.NAME]: $(ELEMENT_SID.PRODUCT_NAME_INPUT).value,
      [PRODUCT.PRICE]: $(ELEMENT_SID.PRODUCT_PRICE_INPUT).value,
      [PRODUCT.QUANTITY]: $(ELEMENT_SID.PRODUCT_QUANTITY_INPUT).value,
    },
  });
};

export default ManageProductView;
