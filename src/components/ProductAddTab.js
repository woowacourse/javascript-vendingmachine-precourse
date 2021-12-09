import { $ } from '../utils/dom.js';
import { createTitle } from '../view/productAddMenu.js';
import { SELECTOR } from '../constants.js';

class ProductAddTab {
  render() {
    const title = createTitle();

    $(`#${SELECTOR.tabContentContainerId}`).innerHTML = title;
  }
}

export default ProductAddTab;
