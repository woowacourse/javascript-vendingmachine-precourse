import { PRODUCT_PURCHASE_TAB, SELECTOR } from '../constants.js';
import { createTheadTableDataTemplate } from './common.js';

const createTbodyTableDataTemplate = (text, className, dataset) => `
  <td ${dataset}="${text}" class="${className}" style="border: 1px solid black;padding: 10px 50px;">${text}</td>
`;

const createTbodyTableDataWithButtonTemplate = () => `
  <td style="border: 1px solid black;padding: 10px 50px;">
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
    <span id="${SELECTOR.chargeAmountId}">${amount}<span>원</span></span>
  </div>
`;

export const createProductTableTemplate = () => `
  <h3>구매할 수 있는 상품 현황</h3>
  <table style="border: 1px solid black;border-collapse: collapse;">
    <thead>
      <tr>
        ${createTheadTableDataTemplate('상품명')}
        ${createTheadTableDataTemplate('가격')}
        ${createTheadTableDataTemplate('수량')}
        ${createTheadTableDataTemplate('구매')}
      </tr>
    </thead>
    <tbody>
      ${createProductItemTemplate('1', '2', '3')}
    </tbody>
  </table>
`;
