import $ from '../utils/dom.js';
import renderProducts from '../views/renderProducts.js';
import store from '../utils/store.js';
import { resetPurchaseInput, printInputCharge } from '../views/productPurchaseView.js';
import { isValidCharge, isValidPurchase, getChange } from '../models/productPurchaseModel.js';

function HandleProductPurchase() {
  this.amount = Number($('#charge-amount').innerText) || 0;

  if (store.getLocalStorage('products')) {
    renderProducts();
  }

  // (1) 금액 투입 기능
  $('#charge-button').addEventListener('click', e => {
    e.preventDefault();
    const purchaseInput = $('#charge-input').value;

    if (isValidCharge(purchaseInput)) {
      this.amount += Number(purchaseInput);
      printInputCharge(this.amount);
      return;
    }
    resetPurchaseInput();
  });

  // (2) 상품을 구매하는 기능 구현
  $('#product-purchase-list').addEventListener('click', e => {
    if (e.target.className === 'purchase-button') {
      const price = Number(e.target.closest('.product-purchase-item').querySelector('.product-purchase-price').innerText);
      if (isValidPurchase(this.amount, price)) {
        // 보유 금액 업데이트
        this.amount -= price; // 아래코드까지, amount를 업데이트해주는 함수로 변환하기
        printInputCharge(this.amount);

        // 수량 업데이트
        const purchaseIndex = e.target.closest('.product-purchase-item').querySelector('.product-purchase-quantity').dataset.productQuantity;
        const products = store.getLocalStorage('products'); // 따로 파일로 빼주기 (현재 상태 가져옴)
        if (products[purchaseIndex].quantity) {
          products[purchaseIndex].quantity -= 1;
          store.setLocalStorage('products', products);
          e.target.closest('.product-purchase-item').querySelector('.product-purchase-quantity').innerText -= 1;
          return;
        }
        alert('상품이 없습니다.');
      }
    }
  });

  // (3) 잔돈을 반환하는 기능
  $('#coin-return-button').addEventListener('click', () => {
    this.amount = getChange();
  });
}

export default HandleProductPurchase;
