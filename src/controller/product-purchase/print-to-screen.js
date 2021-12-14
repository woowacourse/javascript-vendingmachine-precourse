import {
  VENDING_MACHINE,
  PRODUCT,
  COIN_LIST,
  USER,
} from '../../common/constants/constants.js';
import { $ } from '../../common/dom/templates.js';
import { returnChangesinCoins } from '../../common/utils.js';

export const getCurrentSum = () => {
  const currentChargedSum = JSON.parse(localStorage.getItem(USER.REMAIN_MONEY));

  return currentChargedSum;
};

export const printInsertedMoney = () => {
  const currentSum = getCurrentSum();
  const $currentMoney = $('#charge-amount');

  $currentMoney.innerHTML = `${VENDING_MACHINE.INSERTED} ${currentSum} ${VENDING_MACHINE.WON}`;
};

// print purchasable items to screen
export const printProductItemsToPurchaseToScreen = () => {
  const productPurchseListArray = JSON.parse(
    localStorage.getItem(PRODUCT.LIST)
  );
  const $itemName = $('.product-purchase-name');
  const $itemPrice = $('.product-purchase-price');
  const $itemQuantity = $('.product-purchase-quantity');

  for (const item of productPurchseListArray) {
    $itemName.innerHTML = item.name;
    $itemPrice.innerHTML = item.price;
    $itemQuantity.innerHTML = item.quantity;
  }
};

// Purchase items

export const manageDataAttributes = () => {
  const $productName = $('.product-purchase-name');
  const $productPrice = $('.product-purchase-price');
  const $productQuantity = $('.product-purchase-quantity');
  const $purchaseBtn = $('.purchase-button');
  const productListArray = JSON.parse(localStorage.getItem(PRODUCT.LIST));

  for (const item of productListArray) {
    $productName.setAttribute('data-product-name', item.name);
    $productPrice.setAttribute('data-product-price', item.price);
    $productQuantity.setAttribute('data-product-quantity', item.quantity);
    $purchaseBtn.setAttribute('data-purchase-button', item.name);
  }
};

const printDifference = () => {
  const currentSum = getCurrentSum();
  const $chargedAmount = $('#charge-amount');
  $chargedAmount.innerHTML = `${currentSum}`;
};

export const updateSum = (newSum) => {
  localStorage.setItem(USER.REMAIN_MONEY, JSON.stringify(newSum));
  printDifference();
};

const handlePurchaseButton = (target) => {
  const targetQuantity = getCurrentQuantity(target);
  const currentSum = getCurrentSum();

  targetQuantity.innerHTML--;
  targetQuantity.setAttribute(
    'data-product-quantity',
    parseInt(targetQuantity.innerHTML, 10)
  );

  const productListArray = JSON.parse(localStorage.getItem(PRODUCT.LIST));

  const targetProduct = productListArray.find(
    (product) => product.name === target.getAttribute('data-purchase-button')
  );

  let newSum = currentSum - targetProduct.price;
  updateSum(newSum);
};

export const manageProductListAfterPuchased = () => {
  const $purchaseBtns = document.querySelectorAll('.purchase-button');

  console.log($purchaseBtns);

  $purchaseBtns.forEach((button) =>
    button.addEventListener('click', (event) => {
      handlePurchaseButton(event.target);
    })
  );
};

const getCurrentQuantity = (targetProduct) => {
  const parent = targetProduct.parentNode.parentNode;
  const targetProductQuantity = parent.querySelector(
    '.product-purchase-quantity'
  );

  return targetProductQuantity;
};

//Returning coins

export const printReturnedCoins = () => {
  const coinList = JSON.parse(localStorage.getItem('coinList'));
  const randomCoinAmount = returnChangesinCoins(getCurrentSum(), coinList);
  const $vendingMachinereturn500Coin = $('#coin-500-quantity');
  const $vendingMachinereturn100Coin = $('#coin-100-quantity');
  const $vendingMachinereturn50Coin = $('#coin-50-quantity');
  const $vendingMachinereturn10Coin = $('#coin-10-quantity');

  $vendingMachinereturn500Coin.innerHTML = `${
    randomCoinAmount[COIN_LIST[0]]
  }개`;
  $vendingMachinereturn100Coin.innerHTML = `${
    randomCoinAmount[COIN_LIST[1]]
  }개`;
  $vendingMachinereturn50Coin.innerHTML = `${randomCoinAmount[COIN_LIST[2]]}개`;
  $vendingMachinereturn10Coin.innerHTML = `${randomCoinAmount[COIN_LIST[3]]}개`;
};
