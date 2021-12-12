/* eslint-disable indent */
import { $, $$ } from './utils/element-tools.js';
import { CONFIG } from './constants/config.js';

import Component from './core/Component.js';
import ProductManage from './components/ProductManage.js';
import CoinsManage from './components/CoinsManage.js';
import PurchaseManage from './components/PurchaseManage.js';

export default class App extends Component {
  htmlTemplate() {
    return `
      <h1>🥤자판기🥤</h1>
      <nav id="main-menu">
        ${CONFIG.APP_MAIN_MENU.map(
          ({ id, name }) => `<button id=${id}>${name}</button>`
        ).join('')}
      </nav>

      ${CONFIG.APP_MAIN_MENU.map(
        ({ id }) => `<div class="tab component" data-component="${id}"></div>`
      ).join('')}
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
