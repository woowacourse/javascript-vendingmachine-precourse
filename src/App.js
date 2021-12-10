import { isEmpty } from './common/helper.js';
import {
  APP_MENU,
  APP_TITLE,
  CHARGE_AMOUNT,
  DEFAULT_VALUES,
  MACHINE_MANAGE,
  PRODUCT_ADD,
  PURCHASE_MENU,
} from './constants/index.js';
import Header from './container/Header.js';
import Main from './container/Main.js';
import Component from './container/root/Component.js';

export default class App extends Component {
  initialized() {
    this.initMainConfig();
  }

  template() {
    return `
      <header></header>
      <main></main>
    `;
  }

  mount() {
    new Header('header', this.$props);
    new Main('main', this.$props);

    this.$storage.subscribe((component, tabData) => {
      this.$props = {
        ...this.$props,
        component,
        tabData,
      };
      new Header('header', this.$props);
      new Main('main', this.$props);
    });
  }

  initMainConfig() {
    this.$storage.excludeKeys = CHARGE_AMOUNT;
    this.$storage.optionalKey = PURCHASE_MENU;
    this.initProps = { APP_TITLE, APP_MENU, component: PRODUCT_ADD };

    this.machineManageSetter();
    this.purchaseMenuSetter();
  }

  machineManageSetter() {
    if (!isEmpty(this.itemGetter(MACHINE_MANAGE))) return;

    this.$storage.create(MACHINE_MANAGE, DEFAULT_VALUES[MACHINE_MANAGE], false);
  }

  purchaseMenuSetter() {
    if (!isEmpty(this.itemGetter(PURCHASE_MENU))) return;

    this.$storage.creation(PURCHASE_MENU, {
      [PRODUCT_ADD]: this.itemGetter(PRODUCT_ADD) || [],
      [MACHINE_MANAGE]: this.itemGetter(MACHINE_MANAGE) || [],
      [CHARGE_AMOUNT]: this.itemGetter(PURCHASE_MENU) || 0,
    });
  }
}
