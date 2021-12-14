import ManageTabView from '../view/manageTabView.js';
import { getData, setData } from '../localStorage.js';
import {
  checkBlank,
  checkValidQuantity,
  checkValidPrice,
} from '../exceptions.js';

export default class ManageTab {
  constructor() {
    this.view = new ManageTabView();
  }

  init() {
    this.products = getData('products');
    this.view.render(this.products);
    this.setButtonClickEvent();
    console.log(this.products);
  }

  setButtonClickEvent() {
    const addProductButton = document.getElementById('product-add-button');
    addProductButton.addEventListener(
      'click',
      this.onClickAddProductButton.bind(this)
    );
  }

  onClickAddProductButton(e) {
    e.preventDefault();
    const nameInput = document.getElementById('product-name-input').value;
    const priceInput = document.getElementById('product-price-input').value;
    const quantityInput = document.getElementById(
      'product-quantity-input'
    ).value;

    if (this.checkValid(nameInput, priceInput, quantityInput)) return;
    this.addProductToList(nameInput, priceInput, quantityInput);
    this.init();
  }

  addProductToList(_name, _price, _quantity) {
    this.products.push({ name: _name, price: _price, quantity: _quantity });
    setData('products', this.products);
  }

  checkValid(_name, _price, _quantity) {
    if (checkBlank(_name) || checkBlank(_price) || checkBlank(_quantity)) {
      return true;
    }
    if (checkValidQuantity(_quantity)) {
      return true;
    }
    if (checkValidPrice(_price)) {
      return true;
    }
    return false;
  }
}
