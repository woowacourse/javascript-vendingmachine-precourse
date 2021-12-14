import { ELEMENT_CLASSES, ELEMENT_IDS } from '../constants.js';
import { htmlToElement } from '../utils.js';

class TabMenuView {
  static template = `
    <div class="${ELEMENT_CLASSES.TAB_MENU}">
      <button type="button" 
        id="${ELEMENT_IDS.PRODUCT_ADD.MENU}"
        data-tab-pane-id="${ELEMENT_IDS.PRODUCT_ADD.PANE}">
        상품관리
      </button>
      <button type="button"
        id="${ELEMENT_IDS.VENDING_MACHINE_MANAGE.MENU}"
        data-tab-pane-id="${ELEMENT_IDS.VENDING_MACHINE_MANAGE.PANE}">
        잔돈 충전
      </button>
      <button type="button"
        id="${ELEMENT_IDS.PRODUCT_PURCHASE.MENU}"
        data-tab-pane-id="${ELEMENT_IDS.PRODUCT_PURCHASE.PANE}">
        상품 구매
      </button>
    </div>
  `;

  constructor($container) {
    this.$container = $container;
  }

  mount() {
    const $tabMenu = htmlToElement(TabMenuView.template);
    this.$container.appendChild($tabMenu);
    this.bindingElements();
  }

  bindingElements() {
    this.menuItems = document.querySelectorAll(`.${ELEMENT_CLASSES.TAB_MENU} button`);
  }
}

export default TabMenuView;
