import Component from '../core/Component.js';
import { MENU_TYPE } from '../utils/constants.js';
import { SWITCH_MENU } from '../actions/UI.js';
import UIStore from '../stores/UIStore.js';

export default class Header extends Component {
  bindEvents() {
    this.appendRootEvents('click', ({ target }) => this.onClick(target));
  }

  onClick(target) {
    const { id } = target;
    if (!MENU_TYPE[id]) return;
    UIStore.dispatch(SWITCH_MENU(MENU_TYPE[id]));
  }

  render() {
    this.$container.innerHTML = `
        <h1>🥤자판기🥤</h1>
        <button id="product-purchase-menu">상품 구매</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-add-menu">상품 관리</button>
        `;
  }
}
