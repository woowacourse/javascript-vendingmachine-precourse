import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createChargeFormTemplate,
  createProductTableTemplate,
  createReturnCoinTableTemplate,
} from '../templates/productPurchaseMenu.js';

import Selector from '../constants/selector.js';

class ProductPurchaseMenuView {
  render() {
    $(`#${Selector.tabContentContainerId}`).innerHTML =
      createTitleTemplate() +
      createChargeFormTemplate(0) +
      createProductTableTemplate() +
      createReturnCoinTableTemplate();
  }
}

export default ProductPurchaseMenuView;
