import Component from '../../core/Component.js';
import { TAB } from '../../configs/constants.js';
import tc from '../../core/utils/tc.js';

export default class NavBar extends Component {
  template() {
    return `
        <button id='product-add-menu'>상품 관리</button>
        <button id='vending-machine-manage-menu'>잔돈 충전</button>
        <button id='product-purchase-menu'>상품 구매</button>
      `;
  }

  addRoute(selector, to, _0 = tc(selector, 'string'), _1 = tc(to, 'string')) {
    const { navigate } = this.props;

    this.addEvent('click', selector, () => {
      navigate(to);
    });
  }

  setEvent() {
    this.addRoute('#product-add-menu', TAB.PRODUCT_ADD_MENU);
    this.addRoute(
      '#vending-machine-manage-menu',
      TAB.VENDING_MACHINE_MANAGE_MENU
    );
    this.addRoute('#product-purchase-menu', TAB.PRODUCT_PURCHASE_MENU);
  }
}
