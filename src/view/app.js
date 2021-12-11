import { createElement } from '../utils/dom-utils.js';
import TabComponents from './components/tab/tab.js';
import { ID } from '../constant/attributes.js';
import AddProduct from './components/add-product/index.js';
import ChargeChage from './components/charge-change/index.js';

export default class App {
  constructor() {
    this.$root = document.getElementById(ID.APP);
    this.init();
  }

  init() {
    const $emptyContainer = createElement('div');
    this.$menu = new TabComponents(this.$root);
    this.$root.appendChild($emptyContainer);
    this.$addProductComponent = new AddProduct();
    this.$chargeChangeComponent = new ChargeChage();
  }

  renderAddProduct(menu) {
    this.$addProductComponent.$status.render(menu);
    this.$root.replaceChild(this.$addProductComponent.component, this.$root.lastElementChild);
  }

  renderChange(money, coins) {
    this.$chargeChangeComponent.renderMoney(money);
    this.$chargeChangeComponent.renderCoins(coins);
    this.$root.replaceChild(this.$chargeChangeComponent.component, this.$root.lastElementChild);
  }

  addItem({ name, price, quantity }) {
    this.$addProductComponent.addItem({ name, price, quantity });
  }

  report(message) {
    alert(message);
  }
}
