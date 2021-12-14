import {
  getProductsFromLocalStorage,
  saveCoinsToLocalStorage,
  getCoinsFromLocalStorage,
  saveMoneyToLocalStorage,
  getMoneyFromLocalStorage,
  saveProductsToLocalStorage,
} from '../utilsLocalStorage.js';
import {
  COINS,
  MONEY_INPUT_UINT as MONEY_INPUT_UNIT,
  PURCHASE_PRODUCT_MIN_QUANTITY,
  PURCHASE_MONEY_MIN,
} from '../Class/consts.js';

export const initPurchaseMenu = () => {
  const chargeButton = document.getElementById('charge-button');
  const returnButton = document.getElementById('coin-return-button');
  chargeButton.addEventListener('click', () => chargeMoney());
  returnButton.addEventListener('click', () => returnMoney());

  initMoney();
  initProductTable();
};

const initMoney = () => {
  const money = getMoneyFromLocalStorage();
  document.getElementById('charge-amount').innerText = Number(money);
};

const chargeMoney = () => {
  const chargeInput = document.getElementById('charge-input').value;
  const money = getMoneyFromLocalStorage();
  if (isChargeInputValid(chargeInput)) {
    updateMoney(Number(money) + Number(chargeInput));
    saveMoneyToLocalStorage(Number(money) + Number(chargeInput));
  }
};

const isChargeInputValid = (chargeInput) => {
  if (chargeInput % MONEY_INPUT_UNIT !== 0) {
    alert('invalid chargeInput');
    return false;
  }
  return true;
};

const updateMoney = (money) => {
  document.getElementById('charge-amount').innerText = money;
};

const initProductTable = () => {
  const products = getProductsFromLocalStorage();
  const table = document.getElementById('product-purchase-table');
  for (let product of products) {
    table.insertAdjacentHTML('beforeend', productTableRow(product));
  }
  initPurchaseButtons();
};

const productTableRow = (product) => `
  <tr class = 'product-purchase-item'>
      <td class = 'product-purchase-name' data-product-name = ${product.name}> ${product.name}</td>
      <td class = 'product-purchase-price' data-product-price = ${product.price}> ${product.price}</td>
      <td class = 'product-purchase-quantity' data-product-quantity = ${product.quantity}> ${product.quantity}</td>
      <td class = 'purchase-button'><button id = 'purchase-button'> 구매하기</button></td>
  </tr>
  `;

const initPurchaseButtons = () => {
  const purchaseButtons = document.getElementsByClassName('purchase-button');
  for (let button of purchaseButtons) {
    button.addEventListener('click', () => purchaseProduct(button.parentElement));
  }
};

const purchaseProduct = (element) => {
  const products = getProductsFromLocalStorage();
  const name = element.childNodes[1].innerText;
  const product = products[findProductIndex(products, name)];

  const money = getMoneyFromLocalStorage();
  const moneyAfterBuy = Number(money) - Number(product.price);
  if (isPurchasePossible(product)) {
    document.getElementById('charge-amount').innerText = moneyAfterBuy;
    saveMoneyToLocalStorage(moneyAfterBuy);
    product.quantity -= 1;
    element.childNodes[5].innerText -= 1;
    saveProductsToLocalStorage(products);
  }
};

const findProductIndex = (products, name) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      return i;
    }
  }
};

const isPurchasePossible = (product) => {
  const money = getMoneyFromLocalStorage();
  const moneyAfterBuy = Number(money) - Number(product.price);
  if (!isMoneyEnough(moneyAfterBuy)) {
    return false;
  }
  if (!isQuantityEnough(product.quantity)) {
    return false;
  }
  return true;
};

const isMoneyEnough = (money) => {
  if (money < PURCHASE_MONEY_MIN) {
    alert('not enough moeny');
    return false;
  }
  return true;
};

const isQuantityEnough = (quantity) => {
  if (quantity - 1 < PURCHASE_PRODUCT_MIN_QUANTITY) {
    alert('not enough quantity');
    return false;
  }
  return true;
};

const returnMoney = () => {
  let money = getMoneyFromLocalStorage();
  const coins = getCoinsFromLocalStorage();
  let answer = { 500: 0, 100: 0, 50: 0, 10: 0 };

  for (let i of COINS) {
    let num = findNumberOfCoin(money, i);
    money -= num * i;
    answer[i] = num;
    coins[i] -= answer[i];
  }
  updateCoinTableRow(answer);
  saveCoinsToLocalStorage(coins);
  saveMoneyToLocalStorage(money);
  updateMoney(money);
};

const findNumberOfCoin = (money, coinPrice) => {
  const coins = getCoinsFromLocalStorage();
  if (parseInt(money / coinPrice) < coins[coinPrice]) {
    return parseInt(money / coinPrice);
  } else {
    return coins[coinPrice];
  }
};

const updateCoinTableRow = (answer) => {
  for (let key in answer) {
    let price = key;
    let quantity = answer[key];

    let coinQunatity = document.getElementById(`coin-${price}-quantity`);
    coinQunatity.innerText = quantity;
    coinQunatity.insertAdjacentHTML('beforeend', `<span>개</span>`);
  }
};
