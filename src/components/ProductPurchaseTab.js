import { $ } from '../utils/dom.js';
import { createTitle } from '../view/productPurchaseMenu.js';
import { SELECTOR } from '../constants.js';

class ProductPurchaseTab {
  render() {
    const title = createTitle();

    $(`#${SELECTOR.tabContentContainerId}`).innerHTML = title;
  }
}

export default ProductPurchaseTab;
