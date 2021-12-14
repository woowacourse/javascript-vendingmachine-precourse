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
    this.children = [this.#currentMenuView];

    this.state.currentMenu = initMenu;

    this.setEvent();
  }

  get #currentMenuView() {
    return {
      [MENUS.PRODUCT_MANAGE]: this.$productManage,
      [MENUS.CHANGES_CHARGE]: this.$changesCharge,
      [MENUS.PRODUCT_PURCHASE]: this.$productPurchase,
    }[this.state.currentMenu];
  }

  beforeRender() {
    // 완전갱신
    this.children = [this.#currentMenuView];
  }
}

export default Machine;
