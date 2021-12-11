import {
  createTitleTemplate,
  createProductAddFormTemplate,
  createProductTableTemplate,
  createProductTableBodyTemplateWithItem,
} from '../templates/productAddMenu.js';
import { $ } from '../utils/dom.js';

import Selector from '../constants/selector.js';

class ProductAddMenuView {
  render() {
    $(`#${Selector.tabContentContainerId}`).innerHTML =
      createTitleTemplate() + createProductAddFormTemplate() + createProductTableTemplate();
  }

  renderTableWithProductItems(productItems) {
    $(`#${Selector.productTableBodyId}`).innerHTML =
      createProductTableBodyTemplateWithItem(productItems);
  }
}

export default ProductAddMenuView;
