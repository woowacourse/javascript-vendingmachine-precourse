import {
  getProductsFromLocalStorage,
  saveCoinsToLocalStorage,
  getCoinsFromLocalStorage,
  saveMoneyToLocalStorage,
  getMoneyFromLocalStorage,
  saveProductToLocalStorage,
  saveProductsToLocalStorage,
} from '../utilsLocalStorage.js';

export const initPurchaseMenu = () => {
  const chargeButton = document.getElementById('charge-button');
  const returnButton = document.getElementById('coin-return-button');
  chargeButton.addEventListener('click', () => chargeMoney());
  returnButton.addEventListener('click', () => returnMoney());

  initMoney();
  initProductTable();
};

const initMoney = () => {
  const money = getMoneyFromLocalStorage('money');
  document.getElementById('charge-amount').innerText = Number(money);
};

const initProductTable = () => {
  const products = getProductsFromLocalStorage('product');
  const table = document.getElementById('product-purchase-table');
  for (let product of products) {
    table.insertAdjacentHTML('beforeend', productTableRow(product));
  }
};

const productTableRow = (product) => `
  <tr class = 'product-purchase-item'>
      <td class = 'product-purchase-name' data-product-name = ${product.name}> ${product.name}</td>
      <td class = 'product-purchase-price' data-product-price = ${product.price}> ${product.price}</td>
      <td class = 'product-purchase-quantity' data-product-quantity = ${product.quantity}> ${product.quantity}</td>
      <td class = 'purchase-button'><button id = 'purchase-button'> 구매하기</button></td>
  </tr>
  `;
