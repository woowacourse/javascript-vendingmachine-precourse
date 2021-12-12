import {
  createTitleTemplate,
  createProductAddFormTemplate,
  createProductTableTemplate,
  createProductTableBodyTemplateWithItem,
} from '../templates/productAddMenu.js';
import { $ } from '../utils/dom.js';

import SELECTOR from '../constants/selector.js';

class ProductAddMenuView {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitleTemplate() + createProductAddFormTemplate() + createProductTableTemplate();
  }

  renderTableWithProductItems(productItems) {
    $(`#${SELECTOR.productTableBodyId}`).innerHTML =
      createProductTableBodyTemplateWithItem(productItems);
  }
}

export default ProductAddMenuView;
