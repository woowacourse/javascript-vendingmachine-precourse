import {
  createProductAddFormTemplate,
  createProductTableTemplate,
  createProductTableBodyTemplateWithItem,
} from '../templates/productAddMenu.js';
import { createMenuTitleTemplate } from '../templates/common.js';
import { $ } from '../utils/dom.js';

import SELECTOR from '../constants/selector.js';
import { PRODUCT_PURCHASE_MENU } from '../constants/common.js';

class ProductAddMenuView {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createMenuTitleTemplate(PRODUCT_PURCHASE_MENU) +
      createProductAddFormTemplate() +
      createProductTableTemplate();
  }

  renderTableWithProductItems(productItems) {
    $(`#${SELECTOR.productTableBodyId}`).innerHTML =
      createProductTableBodyTemplateWithItem(productItems);
  }

  renderInputWithStorageData(name, price, quantity) {
    $(`#${SELECTOR.productNameInputId}`).value = name;
    $(`#${SELECTOR.productPriceInputId}`).value = price;
    $(`#${SELECTOR.productQuantityInputId}`).value = quantity;
  }

  resetProductItemInputs() {
    $(`#${SELECTOR.productNameInputId}`).value = null;
    $(`#${SELECTOR.productPriceInputId}`).value = null;
    $(`#${SELECTOR.productQuantityInputId}`).value = null;
  }
}

export default ProductAddMenuView;
