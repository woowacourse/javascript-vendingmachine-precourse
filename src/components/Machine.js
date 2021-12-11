import { MENUS } from '../constants/index.js';
import { $tag } from '../utils/index.js';
import Component from './base/Component.js';
import ChangesCharge from './changes-charge/index.js';
import ProductManage from './product-manage/index.js';
import ProductPurchase from './product-purchase/index.js';

class Machine extends Component {
  $productManage;

  $changesCharge;

  $productPurchase;

  constructor(initMenu) {
    super($tag('div'));

    this.$productManage = new ProductManage();
    this.$changesCharge = new ChangesCharge();
    this.$productPurchase = new ProductPurchase();

    this.setState({ currentMenu: initMenu });
    this.setEvent();
    this.children = [this.#currentMenuView];
  }

  get #currentMenuView() {
    return {
      [MENUS.PRODUCT_MANAGE]: this.$productManage,
      [MENUS.CHANGES_CHARGE]: this.$changesCharge,
      [MENUS.PRODUCT_PURCHASE]: this.$productPurchase,
    }[this.state.currentMenu];
  }

  update() {
    // 완전갱신
    this.#currentMenuView.update();
    this.children = [this.#currentMenuView];
    this.render();
  }
}

export default Machine;