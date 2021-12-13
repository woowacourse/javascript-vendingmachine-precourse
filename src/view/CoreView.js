import { $, $All } from '../utils/DOM.js';
import { ChargeView } from './ChargeView.js';
import { BuyView } from './BuyView.js';
import { ProductView } from './ProductView.js';
import { APP_TEMPLATE } from '../utils/template.js';

export class CoreView {
  constructor() {
    this.$app = $('#app');
    this.$productAddTab;
    this.$chargeTab;
    this.$purchaseTab;
    this.$nav;
    this.$sections;
    this.addCommonElements();
    this.productView = new ProductView();
    this.chargeView = new ChargeView();
    this.buyView = new BuyView();
    this.onLoad();
  }

  onLoad() {
    const $sectionArray = Array.from(this.$sections);
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
    const $sectionArray = Array.from(this.$sections);
    $sectionArray.map(($section, j) => {
      if (i === j) {
        $section.style.display = 'block';
        return;
      }
      $section.style.display = 'none';
    });
  }

  addCommonElements() {
    this.$app.innerHTML = APP_TEMPLATE;
    this.$nav = $('#app > nav');
    this.$productAddTab = $('#product-add-menu');
    this.$chargeTab = $('#vending-machine-manage-menu');
    this.$purchaseTab = $('#product-purchase-menu');
    this.$sections = $All('#app > section');
  }
}
