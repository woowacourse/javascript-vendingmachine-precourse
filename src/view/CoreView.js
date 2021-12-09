import { $ } from '../utils/DOM.js';
import { BalanceView } from './BalanceView.js';
import { BuyView } from './BuyView.js';
import { ProductView } from './ProductView.js';

export class CoreView {
  constructor() {
    this.$app = $('#app');
    this.addCommonElements();
    this.ProductView = new ProductView();
    this.BalanceView = new BalanceView();
    this.BuyView = new BuyView();
  }

  addCommonElements() {
    this.$app.innerHTML = `
      <h1>🥤자판기🥤</h1>
      <nav>
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-purchase-menu">상품 구매</button>
      </nav>
      <section id="product-add-section"></section>
      <section id="product-balance-section"></section>
      <section id="product-buy-section"></section>
    `;
  }
}
