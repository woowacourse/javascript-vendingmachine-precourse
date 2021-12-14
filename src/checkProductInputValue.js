import { $productPriceInput, $productQuantityInput } from './htmlConst.js';

export const checkPrice = (PriceInput) => {
  if (PriceInput == '') {
    return alert('값을 입력해주세요.');
  } if (PriceInput < 100) {
    return alert('100원 보다 큰 값을 입력하세요.');
  } if (PriceInput % 10 != 0) {
    return alert('1 ~ 9원 단위는 생략하세요.');
  }
  $productPriceInput.value = '';
  return true;
};

export const checkQuantity = (QuantityInput) => {
  if (QuantityInput < 1) return alert('1개 이상을 입력해 주세요');
  $productQuantityInput.value = '';
  return true;
};
