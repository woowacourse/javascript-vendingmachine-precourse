import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createChargeFormTemplate,
  createProductTableTemplate,
  createReturnCoinTableTemplate,
  createProductTableBodyWithData,
  createReturnCoinTableBodyTemplate,
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

  renderReturnCoinTableWithData(quantity500, quantity100, quantity50, quantity10) {
    $(`#${Selector.returnCoinTableBodyId}`).innerHTML = createReturnCoinTableBodyTemplate(
      quantity500,
      quantity100,
      quantity50,
      quantity10,
    );
  }

  resetPurchaseChargeInput() {
    $(`#${Selector.chargeInputId}`).value = null;
  }
}

export default ProductPurchaseMenuView;
