import { $, $$ } from './utils/element-utils.js';

import Component from './core/Component.js';
import ProductManage from './components/ProductManage.js';
import CoinsManage from './components/CoinsManage.js';
import PurchaseManage from './components/PurchaseManage.js';

export default class App extends Component {
  htmlTemplate() {
    return `
      <h1>🥤자판기🥤</h1>
      <nav id="main-menu">
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-purchase-menu">상품 구매</button>
      </nav>

      <div class="tab component" data-component="product-add-menu"></div>
      <div class="tab component" data-component="vending-machine-manage-menu"></div>
      <div class="tab component" data-component="product-purchase-menu"></div>
    `;
  }

  mounted() {
    this.addMount('product-add-menu', ProductManage);
    this.addMount('vending-machine-manage-menu', CoinsManage);
    this.addMount('product-purchase-menu', PurchaseManage);
  }

  bindEvent() {
    this.addEvent('click', 'nav#main-menu > button', (event) => {
      $$('.tab').forEach(($element) => $element.classList.remove('open'));
      $(`.tab[data-component="${event.target.id}"]`).classList.add('open');
    });
  }
}
