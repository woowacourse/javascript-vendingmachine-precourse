import MESSAGE from '../constants/message.js';

export default {
  // 상품명 관련 검증 함수
  validateProductNameExist: name => (name ? true : alert(MESSAGE.productNameIsRequired)),

  // 상품 가격 관련 검증 함수
  validateProductPriceIsOver100: price =>
    price >= 100 ? true : alert(MESSAGE.productPriceMinimumIs100),
  validateProductPriceCanDivide10: price =>
    price % 10 === 0 ? true : alert(MESSAGE.productPriceHaveToDivide10),

  // 상품 수량 관련 검증 함수
  validateProductQuantityExist: quantity =>
    quantity ? true : alert(MESSAGE.productQuantityIsRequired),
  validateProductQuantityPlusInteger: quantity =>
    quantity > 0 ? true : alert(MESSAGE.productQuantityHaveToPlusInteger),
};
