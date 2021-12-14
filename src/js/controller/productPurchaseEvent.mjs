import {
  renderProductPurchase,
  renderProductPurchaseStatus,
  renderChargedMoney,
  renderReturnCoins
} from '../view/index.mjs';
import { products } from '../model/setProducts.mjs';
import { vendingMachine, COINS } from '../model/VendingMachine.mjs';
import { high10MoneyValidate } from './util/validate.mjs';

function initProductPurchasePage() {
  document.querySelector('main').remove();
  renderProductPurchase(products);
}

function setProducts(productName) {
  let setProducts = products.map(product => {
    if (product.name !== productName) return;
    product.quantity--;

    let input = localStorage.getItem('charge-input');
    let finalInput = input - product.price;
    localStorage.setItem('charge-input', finalInput);
    renderChargedMoney();

    return product;
  });
  localStorage.setItem('products', JSON.stringify(setProducts));
  renderProductPurchaseStatus(setProducts);
}

function purchase() {
  window.addEventListener('click', e => {
    if (!e.target.classList.contains('purchase-button')) return;
    const productName = e.target.closest('.product-purchase-item').children[0].innerText;
    setProducts(productName);
  });
}

function calcCoinReturn() {
  let chargeMoney = localStorage.getItem('charge-input');
  let amountOfCoins = JSON.parse(localStorage.getItem('amount-of-coins'));
  let vendingMachineChargeAmount = localStorage.getItem('vending-machine-charge-amount');
  let coinsType = ['500_WON', '100_WON', '50_WON', '10_WON'];
  let returnCoin = new Array(4).fill(0);

  let flag = false;
  for (let i = 0; i < coinsType.length; i++) {
    if (flag) break;

    while (amountOfCoins[coinsType[i]] > 0) {
      chargeMoney -= COINS[i];
      vendingMachineChargeAmount -= COINS[i];
      amountOfCoins[coinsType[i]]--;
      returnCoin[i]++;

      if (chargeMoney < 0) {
        flag = true;
      }
    }
  }
  localStorage.setItem('amount-of-coins', JSON.stringify(amountOfCoins));
  localStorage.setItem('charge-input', chargeMoney);
  localStorage.setItem('vending-machine-charge-amount', vendingMachineChargeAmount);
  localStorage.setItem('returnCoin', returnCoin);
}

function coinReturn() {
  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#coin-return-button')) return;
    calcCoinReturn();

    renderChargedMoney();
    renderReturnCoins();
  });
}

function productPurchaseButton() {
  let money = document.querySelector('#charge-input').value;

  if (!high10MoneyValidate(money)) return;
  vendingMachine.setProductPurchaseMoney(money);

  renderChargedMoney();
}

export function productPurchaseEvent() {
  const $productPurchaseMenu = document.querySelector('#product-purchase-menu');
  $productPurchaseMenu.addEventListener('click', initProductPurchasePage);
  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#charge-button')) return;

    productPurchaseButton();
  });

  renderProductPurchaseStatus();
  coinReturn();
  purchase();
}
