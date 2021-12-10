import $ from '../utils/dom.js';
import { resetProductAddInput } from '../views/resetInput.js';
import Product from '../models/Product.js';
import printAddedProduct from '../views/printAddedProduct.js';
import store from '../utils/store.js';

const isValidName = nameInput => {
  if (nameInput === '') {
    alert('상품명이 공백입니다. 다시 입력하세요.');
    return false;
  }
  return true;
};

const isValidPrice = priceInput => {
  if (priceInput === '') {
    alert('가격을 입력하지 않았습니다. 다시 입력하세요.');
    return false;
  }
  if (Number(priceInput) < 100) {
    alert('상품 가격은 100원 이상만 입력 가능합니다. 다시 입력하세요.');
    return false;
  }
  if (Number(priceInput) % 10 !== 0) {
    alert('상품 가격은 10원으로 나눠져야합니다. 다시 입력하세요.');
    return false;
  }
  return true;
};

const isValidQuantity = quantityInput => {
  if (quantityInput === '') {
    alert('수량이 입력되지 않았습니다. 다시 입력하세요.');
    return false;
  }
  if (Number(quantityInput) < 1) {
    alert('수량은 1개 이상 입력되어야합니다. 다시 입력하세요.');
    return false;
  }
  return true;
};

const handleProductAdd = () => {
  // 초기값 불러오기 (state)
  const products = store.getLocalStorage('products') ? store.getLocalStorage('products') : [];
  if (products.length > 1) {
    printAddedProduct();
  }

  $('#product-add-button').addEventListener('click', e => {
    e.preventDefault();
    const nameInput = $('#product-name-input').value;
    const priceInput = $('#product-price-input').value;
    const quantityInput = $('#product-quantity-input').value;

    if (isValidName(nameInput) && isValidPrice(priceInput) && isValidQuantity(quantityInput)) {
      const addedProduct = new Product(nameInput, priceInput, quantityInput);

      products.push(addedProduct);
      store.setLocalStorage('products', products);

      printAddedProduct();
    }
    resetProductAddInput();
  });
};

export default handleProductAdd;
