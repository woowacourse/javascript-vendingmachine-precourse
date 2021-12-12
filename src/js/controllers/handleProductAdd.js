import $ from '../utils/dom.js';
import store from '../utils/store.js';
import { printAddedProduct, resetProductAddInput } from '../views/productAddView.js';
import { isValidName, isValidPrice, isValidQuantity } from '../models/productAddModel.js';

function HandleProductAdd() {
  // products는 상태값이 변하니까 this로 관리
  this.products = store.getLocalStorage('products') ? store.getLocalStorage('products') : [];

  if (this.products.length > 1) {
    printAddedProduct();
  }

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
    resetProductAddInput();
  });
}

export default HandleProductAdd;
