import { ZERO, ALERT } from '../../constants.js';

export function checkPurchasePrice(coinAmount, price) {
  if (coinAmount < price) {
    alert(ALERT.NO_PRICE);
    return;
  }

  return true;
}

export function checkPurchaseQuantity(quantity) {
  if (quantity == ZERO) {
    alert(ALERT.NO_QUANTITY);
    return;
  }

  return true;
}
