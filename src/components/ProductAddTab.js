import { $ } from '../utils/dom.js';
import {
  createTitle,
  createProductAddFormTemplate,
  createProductTableTemplate,
} from '../view/productAddMenu.js';
import { SELECTOR } from '../constants.js';

class ProductAddTab {
  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitle() + createProductAddFormTemplate() + createProductTableTemplate();
  }
}

export default ProductAddTab;
