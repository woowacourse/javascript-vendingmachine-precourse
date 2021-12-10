import { $ } from '../utils/dom.js';
import {
  createTitleTemplate,
  createProductAddFormTemplate,
  createProductTableTemplate,
} from '../templates/productAddMenu.js';
import SELECTOR from '../constants/selector.js';

class ProductAddTab {
  constructor() {
    this.$productItems = [];
  }

  render() {
    $(`#${SELECTOR.tabContentContainerId}`).innerHTML =
      createTitleTemplate() +
      createProductAddFormTemplate() +
      createProductTableTemplate(this.$productItems);
  }

  onClickProductAddButton() {
    const productName = $(`#${SELECTOR.productNameInputId}`).value;
    const productPrice = $(`#${SELECTOR.productPriceInputId}`).value;
    const productQuantity = $(`#${SELECTOR.productQuantityInputId}`).value;
    console.log(productName, productPrice, productQuantity);
    const item = {
      productName,
      productPrice,
      productQuantity,
    };
    this.$productItems.push(item);
    this.render();
  }
}

export default ProductAddTab;
