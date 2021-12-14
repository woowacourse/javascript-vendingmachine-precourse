import { BUY_TEMPLATE } from '../constant.js';

export default class BuyProductTabView {
  constructor() {
    this.container = document.getElementById('tabContent');
  }

  render() {
    this.container.innerHTML = BUY_TEMPLATE;
  }
}
