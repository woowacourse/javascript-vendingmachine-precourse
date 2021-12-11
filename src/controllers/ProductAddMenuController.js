import ProductAddMenuModel from '../models/ProductAddMenuModel.js';
import ProductAddMenuView from '../views/ProductAddMenuView.js';
import ProductAddMenuValidator from '../validators/productAddMenu.js';
import { $ } from '../utils/dom.js';

import Selector from '../constants/selector.js';

class ProductAddMenuController {
  constructor() {
    this.$productAddMenuModel = new ProductAddMenuModel();
    this.$productAddMenuView = new ProductAddMenuView();

    this.initAddEventListeners();
  }

  initAddEventListeners() {
    $(`#${Selector.tabContentContainerId}`).addEventListener(
      'click',
      this.onClickTabContent.bind(this),
    );
  }

  onClickTabContent(event) {
    const { id } = event.target;

    if (id === Selector.productAddButtonId) this.onClickProductAddButton();
  }

  onClickProductAddButton() {
    const productName = $(`#${Selector.productNameInputId}`).value;
    const productPrice = $(`#${Selector.productPriceInputId}`).value;
    const productQuantity = $(`#${Selector.productQuantityInputId}`).value;

    if (!ProductAddMenuValidator.checkExistProductName(productName)) return;

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
