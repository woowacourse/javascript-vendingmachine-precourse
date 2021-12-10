import { $, $All } from '../utils/DOM.js';
import { ChargeView } from './ChargeView.js';
import { BuyView } from './BuyView.js';
import { ProductView } from './ProductView.js';

export class CoreView {
  constructor() {
    this.$app = $('#app');
    this.$productAddTab;
    this.$chargeTab;
    this.$purchaseTab;
    this.$nav;
    this.addCommonElements();
    this.productView = new ProductView();
    this.chargeView = new ChargeView();
    this.buyView = new BuyView();
    this.onLoad();
  }

  onLoad() {
    const $sectionArray = Array.from($All('#app > section'));
    $sectionArray[1].style.display = 'none';
    $sectionArray[2].style.display = 'none';
  }

  setOnTabClick(fn) {
    const $tabArray = Array.from(this.$nav.children);
    $tabArray.map(($tab, i) => {
      $tab.addEventListener('click', () => {
        fn(i);
        this.handleSectionDisplay(i);
      });
    });
  }

  handleSectionDisplay(i) {
    const $sectionArray = Array.from($All('#app > section'));
    $sectionArray.map(($section, j) => {
      if (i === j) {
        $section.style.display = 'block';
        return;
      }
      $section.style.display = 'none';
    });
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
    this.$nav = $('#app > nav');
    this.$productAddTab = $('#product-add-menu');
    this.$chargeTab = $('#vending-machine-manage-menu');
    this.$purchaseTab = $('#product-purchase-menu');
  }
}
