import $ from '../utils/dom.js';
import store from '../utils/store.js';
import printAddedProduct from '../views/productAddView.js';
import { PRODUCT, ERROR, PRICE } from '../utils/constants.js';

function HandleProductAdd() {
  this.products = [];

  this.init = () => {
    if (store.getLocalStorage('products')) {
      this.products = store.getLocalStorage('products');
      printAddedProduct();
    }
  };

  const isValidName = nameInput => {
    if (nameInput === '') {
      alert(ERROR.NAME_BLANK);
      $('#product-name-input').focus();
      return false;
    }
    return true;
  };

  const isValidPrice = priceInput => {
    if (priceInput === '') {
      alert(ERROR.PRICE_BLANK);
      $('#product-price-input').focus();
      return false;
    }
    if (Number(priceInput) < PRODUCT.LEAST_PRICE) {
      alert(ERROR.PRICE_TOO_LOW);
      $('#product-price-input').focus();
      return false;
    }
    if (Number(priceInput) % PRICE.TEN_WON !== 0) {
      alert(ERROR.PRICE_SHOULD_DIVIDED_INTO_TEN);
      $('#product-price-input').focus();
      return false;
    }
    return true;
  };

  const isValidQuantity = quantityInput => {
    if (quantityInput === '') {
      alert(ERROR.QUANTITY_BLANK);
      $('#product-quantity-input').focus();
      return false;
    }
    if (Number(quantityInput) < PRODUCT.LEAST_QUANTITY) {
      alert(ERROR.QUANTITY_TOO_LOW);
      $('#product-quantity-input').focus();
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
      this.products.push({ name: nameInput, price: priceInput, quantity: quantityInput });
      store.setLocalStorage('products', this.products);
      printAddedProduct();
    }
  });

  this.init();
}

export default HandleProductAdd;
