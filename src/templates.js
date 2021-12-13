import { ELEMENT_CLASSES, ELEMENT_IDS } from './constants.js';

export const headerTemplate = `
  <div class="header">
    <h1>
      <img src="/images/beverage_icon.png"><span>자판기</span><img src="/images/beverage_icon.png">
    </h1>
  </div>
`;

export const tabMenuTemplate = `
  <div class="tab-menu">
    <button type="button" 
      id="${ELEMENT_IDS.PRODUCT_ADD_MENU}"
      data-tab-pane-id="${ELEMENT_IDS.PRODUCT_ADD_PANE}">
      상품관리
    </button>
    <button type="button"
      id="${ELEMENT_IDS.VENDING_MACHINE_MANAGE_MENU}"
      data-tab-pane-id="${ELEMENT_IDS.VENDING_MACHINE_MANAGE_PANE}">
      잔돈 충전
    </button>
    <button type="button"
      id="${ELEMENT_IDS.PRODUCT_PURCHASE_MENU}"
      data-tab-pane-id="${ELEMENT_IDS.PRODUCT_PURCHASE_PANE}">
      상품 구매
    </button>
  </div>
`;

export const tabContentTemplate = `<div class="${ELEMENT_CLASSES.TAB_CONTENT}"></div>`;

export const productAddTabPaneTemplate = `
  <div id="${ELEMENT_IDS.PRODUCT_ADD_PANE}">
    <h2>상품 추가하기</h2>
    <div class="row">
      <form>
        <input type="text" placeholder="상품명" id="${ELEMENT_IDS.PRODUCT_NAME_INPUT}">
        <input type="number" placeholder="가격" id="${ELEMENT_IDS.PRODUCT_PRICE_INPUT}">
        <input type="number" placeholder="수량" id="${ELEMENT_IDS.PRODUCT_QUANTITY_INPUT}">
        <button type="button" id="${ELEMENT_IDS.PRODUCT_ADD_BUTTON}">추가하기</button>
      </form>
    </div>
    <h2>상품 현황</h2>
    <div class="row">
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
`;

export const productManageItemTemplate = ({ name, price, quantity }) => {
  return `
    <tr>
      <td>${name}</td>
      <td>${price}</td>
      <td>${quantity}</td>
    </tr>
  `;
};
