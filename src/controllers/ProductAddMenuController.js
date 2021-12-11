import ProductAddMenuModel from '../models/ProductAddMenuModel.js';
import ProductAddMenuView from '../views/ProductAddMenuView.js';
import ProductAddMenuValidator from '../validators/productAddMenu.js';
import { $ } from '../utils/dom.js';

import Selector from '../constants/selector.js';

class ProductAddMenuController {
  constructor(currentMenu) {
    this.$productAddMenuModel = new ProductAddMenuModel();
    this.$productAddMenuView = new ProductAddMenuView();

    this.initAddEventListeners();
    if (currentMenu === Selector.productAddMenuId) this.changeMenu();
  }

  initAddEventListeners() {
    $(`#${Selector.tabContentContainerId}`).addEventListener(
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

    if (id === Selector.productAddButtonId) this.onClickProductAddButton();
  }

  onClickProductAddButton() {
    const productName = $(`#${Selector.productNameInputId}`).value;
    const productPrice = $(`#${Selector.productPriceInputId}`).value;
    const productQuantity = $(`#${Selector.productQuantityInputId}`).value;

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
