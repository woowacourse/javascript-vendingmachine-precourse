import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement } from '../../utils.js';
import ProductAddFormView from './product-add-form-view.js';
import ProductAddTableView from './product-add-table-view.js';

class ProductAddView {
  static template = `
    <div id="${ELEMENT_IDS.PRODUCT_ADD_PANE}"></div>
  `;

  constructor($container) {
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(ProductAddView.template);
    this.$container.appendChild(this.$view);
    this.mountChildViews(this.$view);
    return this;
  }

  mountChildViews() {
    this.$form = new ProductAddFormView(this.$view).mount();
    this.$table = new ProductAddTableView(this.$view).mount();
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

export default ProductAddView;
