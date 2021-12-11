import ProductAddTabView from './views/ProductAddTabView.js';
import { getProducts, setProducts } from './utils/localStorage.js';
import { isValidProductAddition } from './utils/validations.js';

export default class ProductAddTab {
  constructor() {
    this.view = new ProductAddTabView();
  }

  initialize() {
    this.products = getProducts();
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
    this.products.push(newProduct);
    setProducts(this.products);
    this.updateViewOnProductAddition();
  }

  updateViewOnProductAddition() {
    this.view.rerender(this.products);
    this.clearInputValue();
  }

  clearInputValue() {
    this.productNameInput.value = '';
    this.productPriceInput.value = '';
    this.productQuantityInput.value = '';
  }
}
