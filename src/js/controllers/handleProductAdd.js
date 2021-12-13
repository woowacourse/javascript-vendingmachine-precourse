import $ from '../utils/dom.js';
import store from '../utils/store.js';
import { PRODUCT, ERROR, PRICE } from '../utils/constants.js';
import { renderProduct, resetProductInput } from '../views/productAddView.js';
import Product from '../models/productAddModel.js';
import alertMessage from '../views/alertMessage.js';

function HandleProductAdd() {
  this.products = [];

  this.init = () => {
    if (store.getLocalStorage('products')) {
      this.products = store.getLocalStorage('products');
      renderProduct();
    }
  };

  const isValidName = nameInput => {
    if (nameInput === '') {
      alertMessage(ERROR.NAME_BLANK);
      return false;
    }
    return true;
  };

  const isValidPrice = priceInput => {
    if (priceInput === '') {
      alertMessage(ERROR.PRICE_BLANK);
      return false;
    }
    if (Number(priceInput) < PRODUCT.LEAST_PRICE) {
      alertMessage(ERROR.PRICE_TOO_LOW);
      return false;
    }
    if (Number(priceInput) % PRICE.TEN_WON !== 0) {
      alertMessage(ERROR.PRICE_SHOULD_DIVIDED_INTO_TEN);
      return false;
    }
    return true;
  };

  const isValidQuantity = quantityInput => {
    if (quantityInput === '') {
      alertMessage(ERROR.QUANTITY_BLANK);
      return false;
    }
    if (Number(quantityInput) < PRODUCT.LEAST_QUANTITY) {
      alertMessage(ERROR.QUANTITY_TOO_LOW);
      return false;
    }
    return true;
  };

  $('#product-add-button').addEventListener('click', e => {
    e.preventDefault();

    const nameInput = $('#product-name-input').value;
    const priceInput = $('#product-price-input').value;
    const quantityInput = $('#product-quantity-input').value;

    if (isValidName(nameInput) && isValidPrice(priceInput) && isValidQuantity(quantityInput)) {
      this.products.push(new Product(nameInput, priceInput, quantityInput));
      store.setLocalStorage('products', this.products);
      resetProductInput();
      renderProduct();
    }
  });

  this.init();
}

export default HandleProductAdd;