import $ from '../utils/dom.js';
import store from '../utils/store.js';
import { ERROR, CHARGE, PRICE } from '../utils/constants.js';
import { resetPurchaseInput, printInputCharge, renderProducts, renderHoldAmount } from '../views/productPurchaseView.js';
import { getChange, updateProductQuantity, updateAmount } from '../models/productPurchaseModel.js';
import alertMessage from '../views/alertMessage.js';

function HandleProductPurchase() {
  this.holdAmount = Number($('#charge-amount').innerText) || 0;

  this.init = () => {
    if (store.getLocalStorage('holdAmount')) {
      renderHoldAmount();
      this.holdAmount = store.getLocalStorage('holdAmount');
    }
    if (store.getLocalStorage('products')) {
      renderProducts();
    }
  };

  const isValidCharge = chargeInput => {
    if (chargeInput === '') {
      alertMessage(ERROR.CHARGE_BLANK);
      return false;
    }
    if (Number(chargeInput) < CHARGE.LEAST_PRICE) {
      alertMessage(ERROR.CHARGE_TOO_LOW);
      return false;
    }
    if (Number(chargeInput % PRICE.TEN_WON !== 0)) {
      alertMessage(ERROR.CHARGE_SHOULD_DIVIDED_INTO_TEN);
      return false;
    }
    return true;
  };

  const isValidPurchase = (holdAmount, price) => {
    if (price > holdAmount) {
      alertMessage(ERROR.PRODUCT_IS_EXPENSIVE);
      return false;
    }
    return true;
  };

  const isValidQuantity = e => {
    const purchaseIndex = e.target.closest('.product-purchase-item').querySelector('.product-purchase-quantity').dataset.productQuantity;
    const products = store.getLocalStorage('products');

    if (!products[purchaseIndex].quantity) {
      alertMessage(ERROR.PRODUCT_EMPTY);
      return false;
    }
    return true;
  };

  // (1) 금액 투입 기능
  $('#charge-button').addEventListener('click', e => {
    e.preventDefault();
    const purchaseInput = $('#charge-input').value;

    if (isValidCharge(purchaseInput)) {
      this.holdAmount += Number(purchaseInput);
      store.setLocalStorage('holdAmount', this.holdAmount);
      printInputCharge(this.holdAmount);
    }
    resetPurchaseInput();
  });

  // (2) 상품을 구매하는 기능 구현
  $('#product-purchase-list').addEventListener('click', e => {
    if (e.target.className === 'purchase-button') {
      const price = Number(e.target.closest('.product-purchase-item').querySelector('.product-purchase-price').innerText);

      if (isValidPurchase(this.holdAmount, price) && isValidQuantity(e)) {
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
