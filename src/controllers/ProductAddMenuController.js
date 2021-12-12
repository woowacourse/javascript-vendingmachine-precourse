import ProductAddMenuValidator from '../validators/productAddMenu.js';
import ProductAddMenuModel from '../models/ProductAddMenuModel.js';
import ProductAddMenuView from '../views/ProductAddMenuView.js';
import { $ } from '../utils/dom.js';

import SELECTOR from '../constants/selector.js';

class ProductAddMenuController {
  constructor(currentMenu) {
    this.$productAddMenuModel = new ProductAddMenuModel();
    this.$productAddMenuView = new ProductAddMenuView();

    this.initAddEventListeners();
    if (currentMenu === SELECTOR.productAddMenuId) this.renderMenuWithData();
  }

  initAddEventListeners() {
    $(`#${SELECTOR.tabContentContainerId}`).addEventListener(
      'click',
      this.onClickTabContent.bind(this),
    );
  }

  renderMenuWithData() {
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

    if (!this.validateProductItem(productName, productPrice, productQuantity)) return;
    this.addProductItemInPresentList(productName, productPrice, productQuantity);
    this.renderWithProductItems();
  }

  renderWithProductItems() {
    this.$productAddMenuView.renderTableWithProductItems(
      this.$productAddMenuModel.getProductItems(),
    );
  }

  addProductItemInPresentList(name, price, quantity) {
    const addItem = {
      productName: name,
      productPrice: price,
      productQuantity: quantity,
    };

    this.$productAddMenuModel.setProductItems([
      ...this.$productAddMenuModel.getProductItems(),
      addItem,
    ]);
  }

  validateProductItem(name, price, quantity) {
    if (!this.validateProductName(name)) return false;
    if (!this.validateProductPrice(price)) return false;
    if (!this.validateProductQuantity(quantity)) return false;
    return true;
  }

  validateProductName(productName) {
    return ProductAddMenuValidator.validateProductNameExist(productName);
  }

  validateProductPrice(productPrice) {
    return (
      ProductAddMenuValidator.validateProductPriceIsOver100(productPrice) &&
      ProductAddMenuValidator.validateProductPriceCanDivide10(productPrice)
    );
  }

  validateProductQuantity(productQuantity) {
    return (
      ProductAddMenuValidator.validateProductQuantityExist(productQuantity) &&
      ProductAddMenuValidator.validateProductQuantityPlusInteger(productQuantity)
    );
  }
}

export default ProductAddMenuController;
