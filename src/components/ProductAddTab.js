import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createProductAddFormTemplate,
  createProductTableTemplate,
} from '../view/productAddMenu.js';
import { SELECTOR } from '../constants.js';

class ProductAddTab {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitleTemplate() + createProductAddFormTemplate() + createProductTableTemplate();
  }
}

export default ProductAddTab;
