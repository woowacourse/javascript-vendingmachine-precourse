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
    const $pane = htmlToElement(ProductAddView.template);
    this.$container.appendChild($pane);
    this.mountChildViews($pane);
    return this;
  }

  mountChildViews($pane) {
    this.form = new ProductAddFormView($pane).mount();
    this.table = new ProductAddTableView($pane).mount();
  }

  unmount() {
    this.unmountChildViews();
    this.$container.replaceChildren();
  }

  unmountChildViews() {
    this.form.unmount();
    this.table.unmount();
  }
}

export default ProductAddView;
