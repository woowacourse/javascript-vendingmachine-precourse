import ManageProductModel from '../models/ManageProductModel.js';
import { ELEMENT_CLASS, ELEMENT_ID, PLACEHOLDER, PRODUCT } from '../utils/constants.js';
import ChargeCoinView from './ChargeCoinView.js';
import View from './View.js';

const PurchaseProductView = { ...View };

PurchaseProductView.setup = function (element) {
  this.init(element);
  return this;
};

PurchaseProductView.render = function () {
  this.element.innerHTML = this.template();
};

PurchaseProductView.template = function () {
  return `
  <h3>금액 투입</h3>
  <div>
    <input placeholder="${PLACEHOLDER.CHARGE_AMOUNT}" type="number" 
    id=${ELEMENT_ID.PURCHAGE_CHARGE_INPUT}/>
    <button id=${ELEMENT_ID.PURCHASE_CHARGE_BUTTON}>투입하기</button>
  </div>
  투입한 금액:<span id=${ELEMENT_ID.PURCHAGE_CHARGE_AMOUNT}></span>
  <h3>구매할 수 있는 상품 현황</h3>
  <table>
    <thead>
      <tr>
        <th>${PRODUCT.NAME}</th>
        <th>${PRODUCT.PRICE}</th>
        <th>${PRODUCT.QUANTITY}</th>
        <th>${PRODUCT.BUY}</th>
      <tr/>
    </thead>
    <tbody>
      ${ManageProductModel.list()
        .map(
          (product, index) =>
            `<tr class=${ELEMENT_CLASS.PRODUCT_PURCHASE_ITEM} data-product-index=${index}>
          <td 
           data-product-name=${product[PRODUCT.NAME]} 
           class=${ELEMENT_CLASS.PRODUCT_PURCHASE_NAME}
          >
            ${product[PRODUCT.NAME]}
          </td>
          <td 
           data-product-price=${product[PRODUCT.PRICE]} 
           class=${ELEMENT_CLASS.PRODUCT_PURCHASE_PRICE}
          >
            ${product[PRODUCT.PRICE]}
          </td>
          <td 
           data-product-quantity=${product[PRODUCT.QUANTITY]} 
           class=${ELEMENT_CLASS.PRODUCT_PURCHASE_QUANTITY}
          >
            ${product[PRODUCT.QUANTITY]}
          </td>
          <td>
            <button data-purchase-index=${index} 
             class=${ELEMENT_CLASS.PURCHASE_BUTTON}
            >
             구매하기</button>
          </td>
        </tr>`,
        )
        .join('')}
    </tbody>
  </table>
  `;
};

export default PurchaseProductView;
