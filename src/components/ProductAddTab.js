import { $ } from '../utils/dom.js';
import { createTitle, createProductAddFormTemplate } from '../view/productAddMenu.js';
import { SELECTOR } from '../constants.js';

class ProductAddTab {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitle() + createProductAddFormTemplate();
  }
}

export default ProductAddTab;
