import $ from '../utils/dom.js';
import store from '../utils/store.js';
import renderProducts from '../views/renderProducts.js';
import { resetPurchaseInput, printInputCharge } from '../views/productPurchaseView.js';
import { isValidCharge, isValidPurchase, getChange, updateProductQuantity, updateAmount } from '../models/productPurchaseModel.js';

function HandleProductPurchase() {
  this.holdAmount = Number($('#charge-amount').innerText) || 0;

  this.init = () => {
    if (store.getLocalStorage('products')) {
      renderProducts();
    }
  };

  // (1) 금액 투입 기능
  $('#charge-button').addEventListener('click', e => {
    e.preventDefault();
    const purchaseInput = $('#charge-input').value;

    if (isValidCharge(purchaseInput)) {
      this.holdAmount += Number(purchaseInput);
      printInputCharge(this.holdAmount);
      return;
    }
    resetPurchaseInput();
  });

  // (2) 상품을 구매하는 기능 구현
  $('#product-purchase-list').addEventListener('click', e => {
    if (e.target.className === 'purchase-button') {
      const price = Number(e.target.closest('.product-purchase-item').querySelector('.product-purchase-price').innerText);

      if (isValidPurchase(this.holdAmount, price)) {
        this.holdAmount = updateAmount(this.holdAmount, price);
        printInputCharge(this.holdAmount);
        updateProductQuantity(e);
      }
    }
  });

  // (3) 잔돈을 반환하는 기능
  $('#coin-return-button').addEventListener('click', () => {
    this.holdAmount = getChange();
  });

  this.init();
}

export default HandleProductPurchase;
