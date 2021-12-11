import ProductAddMenuModel from '../models/ProductAddMenuModel.js';
import ProductAddMenuView from '../views/ProductAddMenuView.js';

import { $ } from '../utils/dom.js';

import SELECTOR from '../constants/selector.js';

class ProductAddMenuController {
  constructor() {
    this.$productAddMenuModel = new ProductAddMenuModel();
    this.$productAddMenuView = new ProductAddMenuView();

    this.initAddEventListeners();
  }

  initAddEventListeners() {
    $(`#${SELECTOR.tabContentContainerId}`).addEventListener(
      'click',
      this.onClickTabContent.bind(this),
    );
  }

  onClickTabContent(event) {
    const { id } = event.target;

    if (id === SELECTOR.productAddButtonId) this.onClickProductAddButton();
  }

  onClickProductAddButton() {
    const productName = $(`#${SELECTOR.productNameInputId}`).value;
    const productPrice = $(`#${SELECTOR.productPriceInputId}`).value;
    const productQuantity = $(`#${SELECTOR.productQuantityInputId}`).value;
    const item = {
      productName,
      productPrice,
      productQuantity,
    };
    this.$productAddMenuModel.setProductItems([
      ...this.$productAddMenuModel.getProductItems(),
      item,
    ]);
    this.$productAddMenuView.renderProductTableWithItem(
      this.$productAddMenuModel.getProductItems(),
    );
  }
}

export default ProductAddMenuController;
