import { ELEMENT_IDS } from './constants.js';

export const headerTemplate = `
  <div class="header">
    <img src="/images/beverage_icon.png"><span>자판기</span><img src="/images/beverage_icon.png">
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
