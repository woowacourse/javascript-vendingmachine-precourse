import ProductAddTabView from './views/ProductAddTabView.js';
import { getData, setData } from './utils/localStorage.js';

export default class ProductAddTab {
  constructor() {
    this.view = new ProductAddTabView();
  }

  initialize() {
    this.products = getData('products');
    this.view.render(this.products);
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
    productAddButton.addEventListener('click', this.onClickProductAddButton.bind(this));
  }

  onClickProductAddButton(e) {
    e.preventDefault();
    this.products.push({
      name: this.productNameInput.value,
      price: this.productPriceInput.value,
      quantity: this.productQuantityInput.value,
    });
    setData('products', this.products);
    this.view.rerender(this.products);
    this.clearInputValue();
  }

  clearInputValue() {
    this.productNameInput.value = '';
    this.productPriceInput.value = '';
    this.productQuantityInput.value = '';
  }
}
