import $ from '../utils/dom.js';
import { resetPurchaseInput } from '../views/resetInput.js';
import printInputCharge from '../views/printInputCharge.js';
import store from '../utils/store.js';
import renderProducts from '../views/renderProducts.js';
import getChange from '../models/calculateChange.js';

const isValidCharge = chargeInput => {
  if (chargeInput === '') {
    alert('공백입니다.');
    return false;
  }
  if (Number(chargeInput % 10 !== 0)) {
    alert('10원으로 나누어지지 않습니다.');
    return false;
  }
  return true;
};

const isValidPurchase = (amount, price) => {
  if (price > amount) {
    alert('현재 넣은 금액보다 상품의 가격이 더 높습니다. 돈을 더 넣으세요.');
    return false;
  }
  return true;
};

const handleProductPurchase = () => {
  if (store.getLocalStorage('products')) {
    renderProducts();
  }
  let amount = 0;

  // (1) 금액 투입 기능
  $('#charge-button').addEventListener('click', e => {
    e.preventDefault();

    const purchaseInput = $('#charge-input').value;
    if (isValidCharge(purchaseInput)) {
      amount += Number(purchaseInput);
      printInputCharge(amount);
      return;
    }
    resetPurchaseInput();
  });

  // (2) 상품을 구매하는 기능 구현
  $('#product-purchase-list').addEventListener('click', e => {
    if (e.target.className === 'purchase-button') {
      const price = Number(e.target.closest('.product-purchase-item').querySelector('.product-purchase-price').innerText);
      if (isValidPurchase(amount, price)) {
        // 보유 금액 업데이트
        amount -= price; // 아래코드까지, amount를 업데이트해주는 함수로 변환하기
        printInputCharge(amount);

        // 수량 업데이트
        const purchaseIndex = e.target.closest('.product-purchase-item').querySelector('.product-purchase-quantity').dataset.productQuantity;
        const products = store.getLocalStorage('products'); // 따로 파일로 빼주기 (현재 상태 가져옴)
        products[purchaseIndex].quantity -= 1;
        store.setLocalStorage('products', products);
        e.target.closest('.product-purchase-item').querySelector('.product-purchase-quantity').innerText -= 1;
      }
    }
  });

  $('#coin-return-button').addEventListener('click', () => {
    getChange();
  });
};

export default handleProductPurchase;
