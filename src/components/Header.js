import Component from '../core/Component.js';
import { MENU_TYPE, MENU_ELEMENT } from '../utils/constants.js';

export default class Header extends Component {
  bindEvents() {
    this.appendRootEvents('click', ({ target }) => this.onClick(target));
  }

  onClick({ id }) {
    if (!MENU_TYPE[id]) return;
    this.props.onChangeMenu(MENU_TYPE[id]);
  }

  render() {
    this.$container.innerHTML = `
      <h1>🥤자판기🥤</h1>
      <button id=${MENU_ELEMENT.PURCHASE}>상품 구매</button>
      <button id=${MENU_ELEMENT.MACHINE}>잔돈 충전</button>
      <button id=${MENU_ELEMENT.PRODUCT}>상품 관리</button>
    `;
  }
}
