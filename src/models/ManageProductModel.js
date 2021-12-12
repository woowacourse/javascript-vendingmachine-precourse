import { PRODUCT } from '../utils/constants.js';

export default {
  products: JSON.parse(localStorage.getItem('products'))
    ? JSON.parse(localStorage.getItem('products'))
    : [],
  add(product) {
    if (!isValidProductInput(product)) {
      return;
    }
    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products));
  },
  list() {
    return this.products;
  },
};

const isValidProductInput = (product) => {
  if (product[PRODUCT.NAME] === '') {
    alert('상품 이름을 입력해주세요.');
    return false;
  }
  if (product[PRODUCT.PRICE] === '') {
    alert('상품 가격을 입력해주세요.');
    return false;
  }
  if (product[PRODUCT.QUANTITY] === '') {
    alert('상품 개수를 입력해주세요.');
    return false;
  }
  if (parseInt(product[PRODUCT.PRICE]) <= 0) {
    alert('잘못된 상품 가격입니다.');
    return false;
  }
  if (parseInt(product[PRODUCT.QUANTITY]) <= 0) {
    alert('잘못된 상품 개수입니다.');
    return false;
  }
  if (parseInt(product[PRODUCT.PRICE]) % 10 !== 0) {
    alert('상품 가격이 10원 단위로 떨어져야 합니다.');
    return false;
  }
  return true;
};
