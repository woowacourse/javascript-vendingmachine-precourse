import { ALERT, DIVIDE_CHARGE, MINIMUM_CHARGE, MINIMUN_PRICE, ZERO } from '../../constants.js';
import ProductAdd from '../../elements/ProductAdd.js';

// 값이 있는지 체크
export function checkProductName(productName) {
  if (nameIsNull(productName)) {
    alert(ALERT.NULL_PRODUCT_NAME);
    return;
  }

  if (nameIsDuplicate(productName)) {
    alert(ALERT.DUPLI_PRODUCT_NAME);
    return;
  }

  return true;
}

function nameIsNull(productName) {
  let allowProductName = true;
  if (productName) {
    allowProductName = false;
  }

  return allowProductName;
}

function nameIsDuplicate(productName) {
  let allowProductName = false;
  const productAdd = new ProductAdd();
  const productNameArr = productAdd.tableBody.querySelectorAll('.product-manage-name');
  for (let name of productNameArr) {
    if (name.dataset.addName == productName) {
      allowProductName = true;
      break;
    }
  }

  return allowProductName;
}

// 가격이 0원 초과, 10으로 나누어 떨어지는지
export function checkProductPrice(productPrice) {
  console.log(productPrice);
  let allowProductPrice = false;
  if (productPrice >= MINIMUN_PRICE && productPrice % DIVIDE_CHARGE == ZERO) {
    allowProductPrice = true;
  }

  return allowProductPrice;
}

export function checkProductQuantity(productQuantity) {
  console.log(productQuantity);
  let allowProductQuantity = false;
  if (productQuantity > 0) {
    allowProductQuantity = true;
  }

  return allowProductQuantity;
}

export function checkCoin(coin) {
  console.log(coin);
  let allowCoin = false;
  if (coin >= MINIMUM_CHARGE && coin % DIVIDE_CHARGE == ZERO) {
    allowCoin = true;
  }

  return allowCoin;
}

export function checkPurchaseCoin(coin) {
  console.log(coin);
  let allowCoin = false;
  if (coin >= MINIMUM_CHARGE && coin % DIVIDE_CHARGE == ZERO) {
    allowCoin = true;
  }

  return allowCoin;
}
