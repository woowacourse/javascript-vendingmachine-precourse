import ProductAddMenuValidator from '../validators/productAddMenu.js';
import ProductAddMenuModel from '../models/ProductAddMenuModel.js';
import ProductAddMenuView from '../views/ProductAddMenuView.js';
import { $ } from '../utils/dom.js';
import Store from '../utils/store.js';

import SELECTOR from '../constants/selector.js';
import STORAGE_KEY from '../constants/key.js';

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
    $(`#${SELECTOR.tabContentContainerId}`).addEventListener(
      'change',
      this.onChangeTabContent.bind(this),
    );
  }

  renderMenuWithData() {
    this.$productAddMenuView.render();
    this.$productAddMenuView.renderTableWithProductItems(
      this.$productAddMenuModel.getProductItems(),
    );
    this.$productAddMenuView.renderInputWithStorageData(
      Store.getLocalStorage(STORAGE_KEY.productNameInput),
      Store.getLocalStorage(STORAGE_KEY.productPriceInput),
      Store.getLocalStorage(STORAGE_KEY.productQuantityInput),
    );
  }

  onClickTabContent(event) {
    const { id } = event.target;

    if (id === SELECTOR.productAddButtonId) this.onClickProductAddButton();
  }

  onChangeTabContent(event) {
    const { id, value } = event.target;

    if (id === SELECTOR.productNameInputId) {
      Store.setLocalStorage(STORAGE_KEY.productNameInput, value);
      return;
    }
    if (id === SELECTOR.productPriceInputId) {
      Store.setLocalStorage(STORAGE_KEY.productPriceInput, value);
      return;
    }
    if (id === SELECTOR.productQuantityInputId)
      Store.setLocalStorage(STORAGE_KEY.productQuantityInput, value);
  }

  resetUserInputInLocalStorage() {
    Store.setLocalStorage(STORAGE_KEY.productNameInput, null);
    Store.setLocalStorage(STORAGE_KEY.productPriceInput, null);
    Store.setLocalStorage(STORAGE_KEY.productQuantityInput, null);
  }

  changeLocalStorageInputValue(key, value) {
    this.$productAddMenuModel.setUserInput(key, value);
  }

  onClickProductAddButton() {
    const productName = $(`#${SELECTOR.productNameInputId}`).value;
    const productPrice = $(`#${SELECTOR.productPriceInputId}`).value;
    const productQuantity = $(`#${SELECTOR.productQuantityInputId}`).value;

    if (!this.validateProductItem(productName, productPrice, productQuantity)) return;
    this.addProductItemInPresentList(productName, productPrice, productQuantity);
    this.renderWithProductItems();
    this.$productAddMenuView.resetProductItemInputs();
    this.resetUserInputInLocalStorage();
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
    return (
      ProductAddMenuValidator.validateProductNameExist(productName) &&
      ProductAddMenuValidator.validateProductNameAlreadyExist(
        productName,
        this.$productAddMenuModel.getProductItems(),
      )
    );
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
