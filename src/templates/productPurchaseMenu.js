import { createTheadTableDataTemplate } from './common.js';

import Selector from '../constants/selector.js';
import Style from '../constants/style.js';
import { PRODUCT_PURCHASE_TAB } from '../constants/element.js';

const createTbodyTableDataTemplate = (text, className, dataset) => `
  <td ${dataset}="${text}" class="${className}" Style="${Style.tableBodyData}">${text}</td>
`;

const createTbodyTableDataWithButtonTemplate = () => `
  <td Style="${Style.tableBodyData}">
    <button class="${Selector.purchaseButtonClass}">구매하기</button>
  </td>
`;

const createProductItemTemplate = (name, price, quantity) => `
  <tr class="${Selector.productPurchaseItemClass}">
    ${createTbodyTableDataTemplate(
      name,
      Selector.productPurchaseNameClass,
      Selector.dataProductNameDataset,
    )}
    ${createTbodyTableDataTemplate(
      price,
      Selector.productPurchasePriceClass,
      Selector.dataProductPriceDataset,
    )}
    ${createTbodyTableDataTemplate(
      quantity,
      Selector.productPurchaseQuantityClass,
      Selector.dataProductQuantityDataset,
    )}
    ${createTbodyTableDataWithButtonTemplate()}
  </tr>
`;

const createReturnCoinItemTemplate = (coin, amount) => `
  <tr class="${Selector.productPurchaseItemClass}">
    <td Style="${Style.tableHeadData}">
      ${coin}원
    </td>
    <td Style="${Style.tableBodyData}">
      <span id="vending-machine-coin-${coin}-quantity">${amount}</span>
      <span>개</span>
    </td>
  </tr>
`;

export const createTitleTemplate = () => `
  <h2>${PRODUCT_PURCHASE_TAB}</h2>
`;

export const createChargeFormTemplate = amount => `
  <h3>금액 투입</h3>
  <div>
    <input placeholder="투입할 금액" id="${Selector.chargeInputId}" />
    <button id="${Selector.chargeButtonId}">투입하기</button>
  </div>
  <br />
  <div>
    <span>투입한 금액:</span>
    <span id="${Selector.chargeAmountId}">${amount}</span><span>원</span>
  </div>
`;

export const createProductTableBodyWithData = productItems => `
  ${productItems
    .map(item =>
      createProductItemTemplate(item.productName, item.productPrice, item.productQuantity),
    )
    .join('')}
`;

export const createProductTableTemplate = () => `
  <h3>구매할 수 있는 상품 현황</h3>
  <table Style="${Style.table}">
    <thead>
      <tr>
        ${createTheadTableDataTemplate('상품명')}
        ${createTheadTableDataTemplate('가격')}
        ${createTheadTableDataTemplate('수량')}
        ${createTheadTableDataTemplate('구매')}
      </tr>
    </thead>
    <tbody id="${Selector.purchaseProductTableBodyId}">
      ${createProductTableBodyWithData([])}
    </tbody>
  </table>
`;

export const createReturnCoinTableTemplate = () => `
  <h3>잔돈</h3>
  <button>반환하기</button>
  <table Style="${Style.table}">
    <thead>
      <tr>
        ${createTheadTableDataTemplate('동전')}
        ${createTheadTableDataTemplate('개수')}
      </tr>
    </thead>
    <tbody>
      ${createReturnCoinItemTemplate(500, 0)}
      ${createReturnCoinItemTemplate(100, 0)}
      ${createReturnCoinItemTemplate(50, 0)}
      ${createReturnCoinItemTemplate(10, 0)}
    </tbody>
  </table>
`;
