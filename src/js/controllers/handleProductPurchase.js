import $ from '../utils/dom.js';
import store from '../utils/store.js';
import { ERROR, CHARGE, PRICE } from '../utils/constants.js';
import { resetChargeInput, renderProducts, renderInputMoney } from '../views/productPurchaseView.js';
import { getChange, updateProductQuantity, updateAmount } from '../models/productPurchaseModel.js';
import alertMessage from '../views/alertMessage.js';

function HandleProductPurchase() {
  this.inputMoney = 0;

  this.init = () => {
    if (store.getLocalStorage('inputMoney')) {
      renderInputMoney();
      this.inputMoney = store.getLocalStorage('inputMoney');
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

  const isValidPurchase = (inputMoney, productPrice) => {
    if (productPrice > inputMoney) {
      alertMessage(ERROR.PRODUCT_IS_EXPENSIVE);
      return false;
    }
    return true;
  };

  const isValidQuantity = purchaseIndex => {
    const products = store.getLocalStorage('products');

    if (!products[purchaseIndex].quantity) {
      alertMessage(ERROR.PRODUCT_EMPTY);
      return false;
    }
    return true;
  };

  $('#charge-button').addEventListener('click', e => {
    e.preventDefault();
    const chargeInput = $('#charge-input').value;

    if (isValidCharge(chargeInput)) {
      this.inputMoney += Number(chargeInput);
      store.setLocalStorage('inputMoney', this.inputMoney);
      renderInputMoney();
    }
    resetChargeInput();
  });

  $('#product-purchase-list').addEventListener('click', e => {
    if (e.target.className === 'purchase-button') {
      const productPrice = Number(e.target.closest('.product-purchase-item').querySelector('.product-purchase-price').innerText);
      const purchaseIndex = e.target.closest('.product-purchase-item').querySelector('.product-purchase-quantity').dataset.productQuantity;

      if (isValidPurchase(this.inputMoney, productPrice) && isValidQuantity(purchaseIndex)) {
        this.inputMoney = updateAmount(this.inputMoney, productPrice);
        store.setLocalStorage('inputMoney', this.inputMoney);
        renderInputMoney(this.inputMoney);
        updateProductQuantity(e);
      }
    }
  });

  $('#coin-return-button').addEventListener('click', () => {
    if (store.getLocalStorage('coins')) {
      this.inputMoney = getChange();
      store.setLocalStorage('inputMoney', this.inputMoney);
      renderInputMoney();
      return;
    }
    alertMessage(ERROR.NO_MONEY);
  });

  this.init();
}

export default HandleProductPurchase;
