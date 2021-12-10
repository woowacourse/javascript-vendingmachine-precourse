import { $ } from '../utils/dom.js';
import { createTitleTemplate, createChargeFormTemplate } from '../templates/productPurchaseMenu.js';
import { SELECTOR } from '../constants.js';

class ProductPurchaseTab {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitleTemplate() + createChargeFormTemplate(0);
  }
}

export default ProductPurchaseTab;
