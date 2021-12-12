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

  resetProductItemInputs() {
    $(`#${SELECTOR.productNameInputId}`).value = null;
    $(`#${SELECTOR.productPriceInputId}`).value = null;
    $(`#${SELECTOR.productQuantityInputId}`).value = null;
  }
}

export default ProductAddMenuView;
