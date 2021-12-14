import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement } from '../../utils.js';
import ProductPurchaseChargeView from './product-purchase-charge-view.js';
import ProductPurchaseFormView from './product-purchase-form-view.js';
import ProductPurchaseTableView from './product-purchase-table-view.js';

class ProductPurchaseView {
  static template = `
    <div id="${ELEMENT_IDS.PRODUCT_PURCHASE.PANE}"></div>
  `;

  constructor($container) {
    this.$container = $container;
  }

  mount(handleClickPurchaseButton) {
    this.$view = htmlToElement(ProductPurchaseView.template);
    this.$container.appendChild(this.$view);
    this.mountChildViews(handleClickPurchaseButton);
    return this;
  }

  mountChildViews() {
    this.$form = new ProductPurchaseFormView(this.$view).mount();
    this.$table = new ProductPurchaseTableView(this.$view).mount();
    this.$charge = new ProductPurchaseChargeView(this.$view).mount();
  }

  unmount() {
    this.unmountChildViews();
    this.$container.removeChild(this.$view);
  }

  unmountChildViews() {
    this.$form.unmount();
    this.$table.unmount();
  }
}

export default ProductPurchaseView;
