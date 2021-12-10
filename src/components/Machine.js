import { MENUS } from '../constants/index.js';
import Component from './base/Component.js';
import ChangesCharge from './changes-charge/index.js';
import ProductManage from './product-manage/index.js';
import ProductPurchase from './product-purchase/index.js';

class Machine extends Component {
  $productManage;

  $changesCharge;

  $productPurchase;

  constructor(initMenu) {
    super(document.createElement('div'));
    this.setState({ currentMenu: initMenu });

    this.$productManage = new ProductManage();
    this.$changesCharge = new ChangesCharge();
    this.$productPurchase = new ProductPurchase();

    this.setEvent();
  }

  setEvent() {
    this.onStateChanged = () => {
      this.render();
    };
  }

  get #currentMenuView() {
    return {
      [MENUS.PRODUCT_MANAGE]: this.$productManage,
      [MENUS.CHANGES_CHARGE]: this.$changesCharge,
      [MENUS.PRODUCT_PURCHASE]: this.$productPurchase,
    }[this.state.currentMenu];
  }

  render() {
    this.renderChildrenView([this.#currentMenuView]);
  }

  update() {
    this.#currentMenuView.update();
  }
}

export default Machine;
