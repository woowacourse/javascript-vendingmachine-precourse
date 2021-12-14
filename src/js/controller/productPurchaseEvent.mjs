import {
  renderProductPurchase,
  renderProductPurchaseStatus,
  renderChargedMoney,
  renderReturnCoins
} from '../view/index.mjs';
import { products } from '../model/setProducts.mjs';
import { vendingMachine } from '../model/VendingMachine.mjs';

function initProductPurchasePage() {
  document.querySelector('main').remove();
  renderProductPurchase(products);
}

function purchase() {
  window.addEventListener('click', e => {
    if (!e.target.classList.contains('purchase-button')) return;
    const productName = e.target.closest('.product-purchase-item').children[0].innerText;
    let setProducts = products.map(product => {
      if (product.name === productName) {
        product.quantity--;

        let input = localStorage.getItem('charge-input');
        let finalInput = input - product.price;
        localStorage.setItem('charge-input', finalInput);
        renderChargedMoney();
      }
      return product;
    });
    localStorage.setItem('products', JSON.stringify(setProducts));
    renderProductPurchaseStatus(setProducts);
  });
}

function coinReturn() {
  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#coin-return-button')) return;

    let chargeMoney = localStorage.getItem('charge-input');
    let amountOfCoins = JSON.parse(localStorage.getItem('amount-of-coins'));
    let vendingMachineChargeAmount = localStorage.getItem('vending-machine-charge-amount');

    let coinsType = ['500_WON', '100_WON', '50_WON', '10_WON'];
    let moneys = [500, 100, 50, 10];
    let returnCoin = new Array(4).fill(0);

    let flag = false;
    for (let i = 0; i < coinsType.length; i++) {
      if (flag) break;

      while (amountOfCoins[coinsType[i]] > 0) {
        chargeMoney -= moneys[i];
        vendingMachineChargeAmount -= moneys[i];
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
    renderChargedMoney();
    renderReturnCoins();
  });
}

export function productPurchaseEvent() {
  const $productPurchaseMenu = document.querySelector('#product-purchase-menu');
  $productPurchaseMenu.addEventListener('click', initProductPurchasePage);
  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#charge-button')) return;
    let money = document.querySelector('#charge-input').value;
    vendingMachine.setProductPurchaseMoney(money);
    renderChargedMoney();
  });

  renderProductPurchaseStatus();
  coinReturn();
  purchase();
}
