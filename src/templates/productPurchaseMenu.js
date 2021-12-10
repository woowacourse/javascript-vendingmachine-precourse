import { PRODUCT_PURCHASE_TAB, SELECTOR } from '../constants.js';

export const createTitleTemplate = () => `
  <h2>${PRODUCT_PURCHASE_TAB}</h2>
`;

export const createChargeFormTemplate = amount => `
  <h3>금액 투입</h3>
  <div>
    <input id="${SELECTOR.chargeInputId}" />
    <button id="${SELECTOR.chargeButtonId}">투입하기</button>
  </div>
  <br />
  <div>
    <span>투입한 금액:</span>
    <span id="${SELECTOR.chargeAmountId}">${amount}<span>원</span></span>
  </div>
`;
