import { CHANGE_TEMPLATE } from '../constant.js';

export default class ProductPurchaseTabView {
  constructor() {
    this.container = document.getElementById('tabContent');
  }

  render() {
    this.container.innerHTML = CHANGE_TEMPLATE;
  }
}
