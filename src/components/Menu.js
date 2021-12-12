import {ID} from '../utils/constants.js';
import Component from './core/Component.js';

export default class Menu extends Component {
  template() {
    return `
      <h1>🥤자판기🥤</h1>
      <nav>
        <button id=${ID.PRODUCT_ADD_MENU}>상품 관리</button>
        <button id=${ID.VENDING_MACHINE_MANAGE_MENU}>잔돈 충전</button>
        <button id=${ID.PRODUCT_PURCHASE_MENU}>상품 구매</button>
      </nav>
    `;
  }

  setEvent() {
    this.addEvent('click', `#${ID.PRODUCT_ADD_MENU}`, () => {
      this.$props.onClickProductManageTab();
    });
    this.addEvent('click', `#${ID.VENDING_MACHINE_MANAGE_MENU}`, () => {
      this.$props.onClickChargeTab();
    });
    this.addEvent('click', `#${ID.PRODUCT_PURCHASE_MENU}`, () => {
      this.$props.onClickPuchaseTab();
    });
  }
}
