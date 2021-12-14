import Component from './essential/component.js';
import { initStorageIfNull } from './utils/storage.js';
import * as CONSTANTS from './utils/constants.js';
import Header from './components/header.js';
import ProductAdd from './components/product-add/index.js';
import VendingMachineManage from './components/vending-machine-manage/index.js';
import ProductPurchase from './components/product-purchase/index.js';

const CONTENT = `
  <header></header>
  <main></main>
`;

export default class App extends Component {
  setup() {
    this.initAllStorageIfNull();
    this.$state = {
      currMenu: 0,
    };
  }

  template() {
    return CONTENT;
  }

  mounted() {
    new Header(this.$('header'), {
      selectMenu: this.selectMenu.bind(this),
    });

    this.mountMain();
  }

  mountMain() {
    const $main = this.$('main');

    switch (this.$state.currMenu) {
      case 0:
        new ProductAdd($main);
        break;
      case 1:
        new VendingMachineManage($main);
        break;
      case 2:
        new ProductPurchase($main);
        break;
    }
  }

  initAllStorageIfNull() {
    initStorageIfNull(CONSTANTS.STORAGE_PRODUCTS_KEY, []);
    initStorageIfNull(CONSTANTS.STORAGE_CHANGES_KEY, { 500: 0, 100: 0, 50: 0, 10: 0 });
    initStorageIfNull(CONSTANTS.STORAGE_REMAINS_KEY, 0);
    initStorageIfNull(CONSTANTS.STORAGE_INSERTED_KEY, 0);
  }

  selectMenu(currMenu) {
    this.setState({ currMenu });
  }
}
