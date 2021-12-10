import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createProductAddFormTemplate,
  createProductTableTemplate,
} from '../templates/productAddMenu.js';
import SELECTOR from '../constants/selector.js';

class ProductAddTab {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitleTemplate() + createProductAddFormTemplate() + createProductTableTemplate();
  }
}

export default ProductAddTab;
