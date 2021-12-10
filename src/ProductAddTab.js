import ProductAddTabView from './views/ProductAddTabView.js';
import { getData, setData } from './utils/localStorage.js';

export default class ProductAddTab {
  constructor() {
    this.view = new ProductAddTabView();
  }

  initialize() {
    this.products = getData('products');
    this.view.render(this.products);
    this.setButtonClickEvent();
    console.log(this.products);
  }

  setButtonClickEvent() {
    const productAddButton = document.querySelector('#product-add-button');
    productAddButton.addEventListener('click', this.onClickProductAddButton.bind(this));
  }

  onClickProductAddButton(e) {
    e.preventDefault();
    const productNameInput = document.querySelector('#product-name-input');
    const productPriceInput = document.querySelector('#product-price-input');
    const productQuantityInput = document.querySelector('#product-quantity-input');
    this.products.push({
      name: productNameInput.value,
      price: productPriceInput.value,
      quantity: productQuantityInput.value,
    });
    setData('products', this.products);
  }
}
