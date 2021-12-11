import { createElement } from '../utils/dom-utils.js';
import TabComponents from './components/tab/tab.js';
import { ID } from '../constant/attributes.js';
import AddProduct from './components/add-product/index.js';
import ChargeChage from './components/charge-change/index.js';

export default class App {
  constructor($target) {
    this.$root = $target;
    this.tab = ID.MENU.ADD;
    this.init();
    this.render();
  }

  init() {
    this.$menu = new TabComponents(this.$root, this.setTab.bind(this));
    const $emptyContainer = createElement('div');
    this.$root.appendChild($emptyContainer);
    this.$addProductComponent = new AddProduct();
    this.$chargeChangeComponent = new ChargeChage(this.updateCharge.bind(this));
  }

  setTab(tab) {
    this.tab = tab;
    this.render();
  }

  updateCharge() {
    this.$root.replaceChild(this.$chargeChangeComponent.component, this.$root.lastElementChild);
  }

  render() {
    switch (this.tab) {
      case ID.MENU.ADD:
        this.$root.replaceChild(this.$addProductComponent.component, this.$root.lastElementChild);
        break;
      case ID.MENU.PURCHASE:
        break;
      case ID.MENU.CHANGE:
        this.$root.replaceChild(this.$chargeChangeComponent.component, this.$root.lastElementChild);
        break;
      default:
    }
  }
}
