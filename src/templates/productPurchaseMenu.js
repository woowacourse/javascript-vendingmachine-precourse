import { createTheadTableDataTemplate } from './common.js';

import SELECTOR from '../constants/selector.js';
import STYLE from '../constants/style.js';

const createTableDataTemplate = (text, className, dataset) => `
  <td ${dataset}="${text}" class="${className}" style="${STYLE.tableBodyData}">${text}</td>
`;

const createTbodyTableDataWithButtonTemplate = () => `
  <td style="${STYLE.tableBodyData}">
    <button class="${SELECTOR.purchaseButtonClass}">구매하기</button>
  </td>
`;

const createProductItemTemplate = (name, price, quantity) => `
  ${createTableDataTemplate(name, SELECTOR.productPurchaseNameClass, SELECTOR.productNameDataset)}
  ${createTableDataTemplate(
    price,
    SELECTOR.productPurchasePriceClass,
    SELECTOR.productPriceDataset,
  )}
  ${createTableDataTemplate(
    quantity,
    SELECTOR.productPurchaseQuantityClass,
    SELECTOR.productQuantityDataset,
  )}
`;

const createReturnCoinItemTemplate = (coin, amount) => `
  <tr class="${SELECTOR.productPurchaseItemClass}">
    <td style="${STYLE.tableHeadData}">
      ${coin}원
    </td>
    <td style="${STYLE.tableBodyData}">
      <span id="coin-${coin}-quantity">${amount}개</span>
    </td>
  </tr>
`;

export const createChargeFormTemplate = amount => `
  <h3>금액 투입</h3>
  <div>
    <input placeholder="투입할 금액" id="${SELECTOR.chargeInputId}" />
    <button id="${SELECTOR.chargeButtonId}">투입하기</button>
  </div>
  <br />
  <div>
    <span>투입한 금액:</span>
    <span id="${SELECTOR.chargeAmountId}">${amount}</span>
    <span>원</span>
  </div>
`;

export const createProductTableBodyWithData = productItems => `
  <tbody id="${SELECTOR.purchaseProductTableBodyId}">
    ${productItems
      .map(
        item => `
          <tr class="${SELECTOR.productPurchaseItemClass}">
            ${createProductItemTemplate(item.productName, item.productPrice, item.productQuantity)}
            ${createTbodyTableDataWithButtonTemplate()}
          </tr>
        `,
      )
      .join('')}
  </tbody>
`;

const createProductTableHeadTemplate = () => `
  <thead>
    <tr>
      ${createTheadTableDataTemplate('상품명')}
      ${createTheadTableDataTemplate('가격')}
      ${createTheadTableDataTemplate('수량')}
      ${createTheadTableDataTemplate('구매')}
    </tr>
  </thead>
`;

export const createProductTableTemplate = () => `
  <h3>구매할 수 있는 상품 현황</h3>
  <table style="${STYLE.table}">
    ${createProductTableHeadTemplate()}
    ${createProductTableBodyWithData([])}
  </table>
`;

export const createReturnCoinTableBodyTemplate = (
  quantity500,
  quantity100,
  quantity50,
  quantity10,
) => `
  ${createReturnCoinItemTemplate(500, quantity500)}
  ${createReturnCoinItemTemplate(100, quantity100)}
  ${createReturnCoinItemTemplate(50, quantity50)}
  ${createReturnCoinItemTemplate(10, quantity10)}
`;

export const createReturnCoinTableTemplate = () => `
  <h3>잔돈</h3>
  <button id="${SELECTOR.coinReturnButtonId}">반환하기</button>
  <table style="${STYLE.table}">
    <thead>
      <tr>
        ${createTheadTableDataTemplate('동전')}
        ${createTheadTableDataTemplate('개수')}
      </tr>
    </thead>
    <tbody id="${SELECTOR.returnCoinTableBodyId}">
      ${createReturnCoinTableBodyTemplate(0, 0, 0, 0)}
    </tbody>
  </table>
`;
