import { $ } from '../utils/dom.js';
import {
  createChargeFormTemplate,
  createProductTableTemplate,
  createReturnCoinTableTemplate,
  createProductTableBodyWithData,
  createReturnCoinTableBodyTemplate,
} from '../templates/productPurchaseMenu.js';
import { createMenuTitleTemplate } from '../templates/common.js';

import SELECTOR from '../constants/selector.js';
import { PRODUCT_PURCHASE_MENU } from '../constants/common.js';

class ProductPurchaseMenuView {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createMenuTitleTemplate(PRODUCT_PURCHASE_MENU) +
      createChargeFormTemplate(0) +
      createProductTableTemplate() +
      createReturnCoinTableTemplate();
  }

  renderProductTableBodyWithData(productItems) {
    $(`#${SELECTOR.purchaseProductTableBodyId}`).innerHTML =
      createProductTableBodyWithData(productItems);
  }

  renderPurchaseChargeAmount(amount) {
    $(`#${SELECTOR.chargeAmountId}`).innerHTML = amount;
  }

  renderReturnCoinTableWithData(quantity500, quantity100, quantity50, quantity10) {
    $(`#${SELECTOR.returnCoinTableBodyId}`).innerHTML = createReturnCoinTableBodyTemplate(
      quantity500,
      quantity100,
      quantity50,
      quantity10,
    );
  }

  resetPurchaseChargeInput() {
    $(`#${SELECTOR.chargeInputId}`).value = null;
  }
}

export default ProductPurchaseMenuView;
