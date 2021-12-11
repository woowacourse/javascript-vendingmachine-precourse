import ProductAddTabView from '../views/ProductAddTabView.js';
import { isValidProductAddition } from '../utils/validations.js';

export default class ProductAddTab {
  constructor(storage) {
    this.view = new ProductAddTabView();
    this.storage = storage;
  }

  initialize() {
    this.view.render(this.storage.products);
    this.initInputElements();
    this.setButtonClickEvent();
  }

  initInputElements() {
    this.productNameInput = document.querySelector('#product-name-input');
    this.productPriceInput = document.querySelector('#product-price-input');
    this.productQuantityInput = document.querySelector('#product-quantity-input');
  }

  setButtonClickEvent() {
    const productAddButton = document.querySelector('#product-add-button');
    productAddButton.addEventListener('click', this.onClickProductAddition.bind(this));
  }

  onClickProductAddition(e) {
    e.preventDefault();
    const newProduct = {
      name: this.productNameInput.value,
      price: Number(this.productPriceInput.value),
      quantity: Number(this.productQuantityInput.value),
    };
    if (!isValidProductAddition(newProduct)) return;
    this.storage.updateProducts(newProduct);
    this.updateViewOnProductAddition();
  }

  updateViewOnProductAddition() {
    this.view.rerender(this.storage.products);
    this.clearInputValue();
  }

  clearInputValue() {
    this.productNameInput.value = '';
    this.productPriceInput.value = '';
    this.productQuantityInput.value = '';
  }
}
