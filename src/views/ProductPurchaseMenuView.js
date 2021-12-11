import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createChargeFormTemplate,
  createProductTableTemplate,
  createReturnCoinTableTemplate,
} from '../templates/productPurchaseMenu.js';
import SELECTOR from '../constants/selector.js';

class ProductPurchaseMenuView {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitleTemplate() +
      createChargeFormTemplate(0) +
      createProductTableTemplate() +
      createReturnCoinTableTemplate();
  }
}

export default ProductPurchaseMenuView;
