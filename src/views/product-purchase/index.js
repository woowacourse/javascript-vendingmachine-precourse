import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement } from '../../utils.js';
import ProductPurchaseFormView from './product-purchase-form-view.js';

class ProductPurchaseView {
  static template = `
    <div id="${ELEMENT_IDS.PRODUCT_PURCHASE.PANE}"></div>
  `;

  constructor($container) {
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(ProductPurchaseView.template);
    this.$container.appendChild(this.$view);
    this.mountChildViews();
    return this;
  }

  mountChildViews() {
    this.$form = new ProductPurchaseFormView(this.$view).mount();
  }

  unmount() {
    this.unmountChildViews();
    this.$container.removeChild(this.$view);
  }

  unmountChildViews() {
    this.$form.unmount();
  }
}

export default ProductPurchaseView;
