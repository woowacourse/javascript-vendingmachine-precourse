import {
  COIN_UNITS,
  ERROR_MESSAGE,
  STANDARD,
  STORAGE_NAME,
  AMOUNT_ID,
} from '../../utils/constants.js';
import { $ } from '../../utils/querySelector.js';
import { isValidInputAmount } from '../../utils/validation.js';
import { showCurrentAmount } from '../../view/currentAmount.js';
import { getLocalStorage, setLocalStorage } from '../../utils/storage.js';

let currentAmount = getLocalStorage(STORAGE_NAME.USER_AMOUNT)
  ? Number(getLocalStorage(STORAGE_NAME.USER_AMOUNT))
  : STANDARD.CURRENT_MONEY;

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

export const handleCoinReturnClick = () => {
  const storedCoins = getLocalStorage(STORAGE_NAME.COIN);
  $('#coin-return-result').innerHTML = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const unit of COIN_UNITS) {
    const removedQuantity = makeReturnedCoinsView(unit, storedCoins[unit]);
    storedCoins[unit] -= removedQuantity;
  }

  showCurrentAmount(AMOUNT_ID.USER, currentAmount);
  setLocalStorage(STORAGE_NAME.COIN, storedCoins);
  setLocalStorage(STORAGE_NAME.USER_AMOUNT, currentAmount);
};

export const handlePurchaseButtonClick = (event) => {
  const target = event.target.parentElement.parentElement;
  const name = target.childNodes[1].dataset.productName;
  const price = target.childNodes[3].dataset.productPrice;

  if (currentAmount < price) {
    return alert(ERROR_MESSAGE.NOT_ENOUGH_MONEY);
  }

  subtractPriceAndQuantity(target, price);
  showCurrentAmount(AMOUNT_ID.USER, currentAmount);
  resetProductItemStorage(name);
  setLocalStorage(STORAGE_NAME.USER_AMOUNT, currentAmount);
};

export const handleChargeInput = (event) => {
  event.preventDefault();
  const chargeInput = Number($('#charge-input').value);

  if (!isValidInputAmount(chargeInput)) {
    return;
  }

  currentAmount += chargeInput;
  showCurrentAmount(AMOUNT_ID.USER, currentAmount);
  setLocalStorage(STORAGE_NAME.USER_AMOUNT, currentAmount);
};
