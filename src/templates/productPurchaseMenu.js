import { createTheadTableDataTemplate } from './common.js';

import SELECTOR from '../constants/selector.js';
import STYLE from '../constants/style.js';
import { PRODUCT_PURCHASE_TAB } from '../constants/element.js';

const createTbodyTableDataTemplate = (text, className, dataset) => `
  <td ${dataset}="${text}" class="${className}" style="${STYLE.tableBodyData}">${text}</td>
`;

const createTbodyTableDataWithButtonTemplate = () => `
  <td style="${STYLE.tableBodyData}">
    <button class="${SELECTOR.purchaseButtonClass}">구매하기</button>
  </td>
`;

const createProductItemTemplate = (name, price, quantity) => `
  <tr class="${SELECTOR.productPurchaseItemClass}">
    ${createTbodyTableDataTemplate(
      name,
      SELECTOR.productPurchaseNameClass,
      SELECTOR.dataProductNameDataset,
    )}
    ${createTbodyTableDataTemplate(
      price,
      SELECTOR.productPurchasePriceClass,
      SELECTOR.dataProductPriceDataset,
    )}
    ${createTbodyTableDataTemplate(
      quantity,
      SELECTOR.productPurchaseQuantityClass,
      SELECTOR.dataProductQuantityDataset,
    )}
    ${createTbodyTableDataWithButtonTemplate()}
  </tr>
`;

const createReturnCoinItemTemplate = (coin, amount) => `
  <tr class="${SELECTOR.productPurchaseItemClass}">
    <td style="${STYLE.tableHeadData}">
      ${coin}원
    </td>
    <td style="${STYLE.tableBodyData}">
      <span id="vending-machine-coin-${coin}-quantity">${amount}개</span>
    </td>
  </tr>
`;

export const createTitleTemplate = () => `
  <h2>${PRODUCT_PURCHASE_TAB}</h2>
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
  ${productItems
    .map(item =>
      createProductItemTemplate(item.productName, item.productPrice, item.productQuantity),
    )
    .join('')}
`;

export const createProductTableTemplate = () => `
  <h3>구매할 수 있는 상품 현황</h3>
  <table style="${STYLE.table}">
    <thead>
      <tr>
        ${createTheadTableDataTemplate('상품명')}
        ${createTheadTableDataTemplate('가격')}
        ${createTheadTableDataTemplate('수량')}
        ${createTheadTableDataTemplate('구매')}
      </tr>
    </thead>
    <tbody id="${SELECTOR.purchaseProductTableBodyId}">
      ${createProductTableBodyWithData([])}
    </tbody>
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
