import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createChargeFormTemplate,
  createProductTableTemplate,
} from '../templates/productPurchaseMenu.js';
import { SELECTOR } from '../constants.js';

class ProductPurchaseTab {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitleTemplate() + createChargeFormTemplate(0) + createProductTableTemplate();
  }
}

export default ProductPurchaseTab;
