import ProductAddMenuModel from '../models/ProductAddMenuModel.js';
import ProductAddMenuView from '../views/ProductAddMenuView.js';
import ProductAddMenuValidator from '../validators/productAddMenu.js';
import { $ } from '../utils/dom.js';

import SELECTOR from '../constants/selector.js';

class ProductAddMenuController {
  constructor(currentMenu) {
    this.$productAddMenuModel = new ProductAddMenuModel();
    this.$productAddMenuView = new ProductAddMenuView();

    this.initAddEventListeners();
    if (currentMenu === SELECTOR.productAddMenuId) this.changeMenu();
  }

  initAddEventListeners() {
    $(`#${SELECTOR.tabContentContainerId}`).addEventListener(
      'click',
      this.onClickTabContent.bind(this),
    );
  }

  changeMenu() {
    this.$productAddMenuView.render();
    this.$productAddMenuView.renderTableWithProductItems(
      this.$productAddMenuModel.getProductItems(),
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

    if (!ProductAddMenuValidator.validateProductNameExist(productName)) return;
    if (
      !ProductAddMenuValidator.validateProductPriceIsOver100(productPrice) ||
      !ProductAddMenuValidator.validateProductPriceCanDivide10(productPrice)
    )
      return;
    if (
      !ProductAddMenuValidator.validateProductQuantityExist(productQuantity) ||
      !ProductAddMenuValidator.validateProductQuantityPlusInteger(productQuantity)
    )
      return;

    const item = {
      productName,
      productPrice,
      productQuantity,
    };
    this.$productAddMenuModel.setProductItems([
      ...this.$productAddMenuModel.getProductItems(),
      item,
    ]);
    this.$productAddMenuView.renderTableWithProductItems(
      this.$productAddMenuModel.getProductItems(),
    );
  }
}

export default ProductAddMenuController;
