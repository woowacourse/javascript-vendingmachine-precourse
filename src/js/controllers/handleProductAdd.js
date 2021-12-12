import $ from '../utils/dom.js';
import store from '../utils/store.js';
import printAddedProduct from '../views/productAddView.js';
import { isValidName, isValidPrice, isValidQuantity } from '../models/productAddModel.js';

function HandleProductAdd() {
  this.products = [];

  this.init = () => {
    if (store.getLocalStorage('products')) {
      this.products = store.getLocalStorage('products');
      printAddedProduct();
    }
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
