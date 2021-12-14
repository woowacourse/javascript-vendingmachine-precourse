import { COIN_UNITS, ERROR_MESSAGE, STANDARD, STORAGE_NAME } from '../../utils/constants.js';
import { $ } from '../../utils/querySelector.js';
import { isDivideByTen } from '../../utils/validation.js';
import { showCurrentAmount, initProductPurchaseList } from '../../view/view.js';
import { getLocalStorage, setLocalStorage } from '../storage/storage.js';
import { productPurchaseTemplate } from './productPurchaseTemplate.js';

let currentAmount = getLocalStorage(STORAGE_NAME.USER_AMOUNT)
  ? getLocalStorage(STORAGE_NAME.USER_AMOUNT)
  : STANDARD.CURRENT_MONEY;
const chargeAmountId = '#charge-amount';

const resetProductItemStorage = (name) => {
  const productItems = getLocalStorage(STORAGE_NAME.PRODUCT).map((item) => {
    if (item.name === name) {
      item.quantity -= 1;
    }
    return item;
  });

  setLocalStorage(STORAGE_NAME.PRODUCT, productItems);
};

const subtractPriceAndQuantity = (target, price) => {
  target.childNodes[5].dataset.productQuantity--;
  target.childNodes[5].innerText--;
  currentAmount -= price;
};

const returnedCoinTemplate = (unit, quantity) => `
  <tr>
    <td>${unit}원</td>
    <td id="coin-${unit}-quantity">${quantity}개</td>
  </tr>
`;

const showReturnedCoin = (unit, quantity) => {
  const returnedCoin = returnedCoinTemplate(unit, quantity);
  $('#coin-return-result').insertAdjacentHTML('beforeend', returnedCoin);
};

const calculationQuantity = (unit, quantity) => {
  let count = 0;
  while (quantity > 0 && unit <= currentAmount) {
    currentAmount -= unit;
    count++;
    quantity--;
  }
  return count;
};

const makeReturnedCoinsView = (unit, storedQuantity) => {
  if (storedQuantity !== 0 && unit <= currentAmount) {
    const quantity = calculationQuantity(unit, storedQuantity);
    showReturnedCoin(unit, quantity);
    return quantity;
  }
  showReturnedCoin(unit, 0);
  return 0;
};

const handleCoinReturnClick = () => {
  const storedCoins = getLocalStorage(STORAGE_NAME.COIN);
  $('#coin-return-result').innerHTML = '';

  for (const unit of COIN_UNITS) {
    const removedQuantity = makeReturnedCoinsView(unit, storedCoins[unit]);
    storedCoins[unit] -= removedQuantity;
  }

  showCurrentAmount(chargeAmountId, currentAmount);
  setLocalStorage(STORAGE_NAME.COIN, storedCoins);
  setLocalStorage(STORAGE_NAME.USER_AMOUNT, currentAmount);
};

const handlePurchaseButtonClick = (event) => {
  const target = event.target.parentElement.parentElement;
  const name = target.childNodes[1].dataset.productName;
  const price = target.childNodes[3].dataset.productPrice;

  if (currentAmount < price) {
    return alert(ERROR_MESSAGE.NOT_ENOUGH_MONEY);
  }

  subtractPriceAndQuantity(target, price);
  showCurrentAmount(chargeAmountId, currentAmount);
  resetProductItemStorage(name);
  setLocalStorage(STORAGE_NAME.USER_AMOUNT, currentAmount);
};

const handleChargeInput = (event) => {
  event.preventDefault();
  const chargeInput = Number($('#charge-input').value);

  if (isDivideByTen(chargeInput)) {
    return alert(ERROR_MESSAGE.NOT_DIVIDE_BY_TEN);
  }

  currentAmount += chargeInput;
  showCurrentAmount(chargeAmountId, currentAmount);
  setLocalStorage(STORAGE_NAME.USER_AMOUNT, currentAmount);
};

const initProductPurchaseMenu = (storedProductList, storedUserAmount) => {
  if (storedProductList) {
    initProductPurchaseList(storedProductList);
  }
  if (storedUserAmount) {
    showCurrentAmount(chargeAmountId, storedUserAmount);
  }
};

export const showProductPurchaseMenu = () => {
  $('#app-container').innerHTML = productPurchaseTemplate;
  const storedProductList = getLocalStorage(STORAGE_NAME.PRODUCT);
  const storedUserAmount = getLocalStorage(STORAGE_NAME.USER_AMOUNT);

  initProductPurchaseMenu(storedProductList, storedUserAmount);

  const $productPurchaseItems = document.querySelectorAll('.product-purchase-item');
  $productPurchaseItems.forEach((item) =>
    item.addEventListener('click', handlePurchaseButtonClick),
  );
  $('form').addEventListener('submit', handleChargeInput);
  $('#coin-return-button').addEventListener('click', handleCoinReturnClick);
};
