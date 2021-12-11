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

  renderProductTableWithItem(item) {
    $(`#${SELECTOR.productTableBodyId}`).innerHTML = createProductTableBodyTemplateWithItem(item);
  }
}

export default ProductAddMenuView;
