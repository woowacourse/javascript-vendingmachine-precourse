import {
  CLASS_PURCHASE_NAME,
  CLASS_PURCHASE_PRICE,
  CLASS_PURCHASE_QUANTITY,
} from './constants.js';
import { registerInsert, registerPurchase, returnChange } from './models.js';

export const handlePurchaseCharge = function handlePurchaseChargeInput() {
  const insertValue = this.DOMs.insertInput.value * 1;
  const registerSuccess = registerInsert(insertValue);

  if (registerSuccess) {
    this.updateTotalAmount();
  }
};

export function handlePurchaseClick(e) {
  const item = e.target.parentNode.parentNode;
  const dataset = {
    productName: item.querySelector(`.${CLASS_PURCHASE_NAME}`).dataset
      .productName,
    productPrice: item.querySelector(`.${CLASS_PURCHASE_PRICE}`).dataset
      .productPrice,
    productQuantity: item.querySelector(`.${CLASS_PURCHASE_QUANTITY}`).dataset
      .productQuantity,
  };
  const purchaseSuccess = registerPurchase(dataset);
  if (purchaseSuccess) {
    this.updateTotalAmount();
    this.constructor.updateItemTable(item);
  }
}

export function handleReturnChange() {
  const coins = returnChange();
  this.updateTotalAmount();
  this.renderReturnCoins(coins);
}
