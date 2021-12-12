import View from './View.js';
import { ELEMENT_ID, PRODUCT } from '../utils/constants.js';

const ManageProductView = { ...View };

ManageProductView.setup = function (element) {
  this.init(element);
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
    `;
};

export default ManageProductView;
