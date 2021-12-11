import { TABMENU } from '../data/elementData.js';

export default class TabMenu {
  constructor() {
    this.template = this.tabTemplate();
  }

  tabTemplate() {
    return `<nav>
      <button id="${TABMENU.SELECTOR.PRODUCT_MENU}">상품 관리</button>
      <button id="${TABMENU.SELECTOR.COIN_MENU}">잔돈 충전</button>
      <button id="${TABMENU.SELECTOR.PURCHASE_MENU}">상품 구매</button>
    </nav>`;
  }
}
