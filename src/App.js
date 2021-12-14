import Navigator from './store/Navigator.js';
import Header from './component/Header.js';
import TabContainer from './component/TabContainer.js';
import TAB_ID from './constant/dataset.js';
import { ID } from './constant/selector.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.navigator = new Navigator();
  }

  init() {
    this.header = new Header(this.$target, {
      changeFocusedTab: this.changeFocusedTab.bind(this),
    });
    this.tabContainer = new TabContainer(this.$target);
  }

  changeFocusedTab(buttonId) {
    if (buttonId === ID.PRODUCT_ADD_MENU) {
      this.navigator.navigateTo(TAB_ID.TAB_PRODUCT_ADD);
    } else if (buttonId === ID.MACHINE_MANAGE_MENU) {
      this.navigator.navigateTo(TAB_ID.TAB_MACHINE_MANAGE);
    } else if (buttonId === ID.PURCHASE_MENU) {
      this.navigator.navigateTo(TAB_ID.TAB_PURCHASE);
    }

    this.tabContainer.showFocusedTab();
  }
}
