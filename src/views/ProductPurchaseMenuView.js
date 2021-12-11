import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createChargeFormTemplate,
  createProductTableTemplate,
  createReturnCoinTableTemplate,
  createProductTableBodyWithData,
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

  renderProductTableBodyWithData(productItems) {
    $(`#${Selector.purchaseProductTableBodyId}`).innerHTML =
      createProductTableBodyWithData(productItems);
  }

  renderPurchaseChargeAmount(amount) {
    $(`#${Selector.chargeAmountId}`).innerHTML = amount;
  }

  resetPurchaseChargeInput() {
    $(`#${Selector.chargeInputId}`).value = null;
  }
}

export default ProductPurchaseMenuView;
