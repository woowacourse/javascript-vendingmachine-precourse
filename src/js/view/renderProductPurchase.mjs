import { makeRowCell } from './common/makeRowCell.mjs';
import { COINS } from '../model/VendingMachine.mjs';

const $fragment = new DocumentFragment();

function chargeInput() {
  const $chargeInputWrap = document.createElement('section');
  $chargeInputWrap.id = 'chargeInputWrap';

  $chargeInputWrap.innerHTML = `
    <h2>금액 투입</h2>
    <div>
      <input id="charge-input" placeholder="투입할 금액"></input>
      <button id="charge-button">투입하기</button>
    </div>
    <p>투입한 금액: <span id="charge-amount"></span></p>
  `;

  $fragment.appendChild($chargeInputWrap);
}

export function renderChargedMoney() {
  const chargeAmount = document.querySelector('#charge-amount');
  chargeAmount.textContent = localStorage.getItem('charge-input');
}

function purchaseItems() {
  const $purchaseItemsWrap = document.createElement('section');
  $purchaseItemsWrap.id = 'purchaseItemsWrap';

  $purchaseItemsWrap.innerHTML = `
    <h2>구매할 수 있는 상품 현황</h2>
    <table>
      <thead>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>구매</th>
      </thead>
      <tbody id="product-purchase-status">
      </tbody>
    </table>
  `;

  $fragment.appendChild($purchaseItemsWrap);
}

function quantityPerCoins() {
  const $quantityPerCoinsWrap = document.createElement('section');
  $quantityPerCoinsWrap.id = 'quantityPerCoins';

  $quantityPerCoinsWrap.innerHTML = `
    <h2>잔돈</h2>
    <button id="coin-return-button">반환하기</button>
    <table>
      <thead>
        <th>동전</th>
        <th>개수</th>
      </thead>
      <tbody>
        ${makeRowCell().join('')}
      </tbody>
    </table>
  `;
  $fragment.appendChild($quantityPerCoinsWrap);
}

export function renderProductPurchase(products) {
  const $app = document.querySelector('#app');
  const $main = document.createElement('main');
  $main.id = 'productPurchaseOrQuantityWrap';

  chargeInput();
  purchaseItems();
  quantityPerCoins();

  $main.appendChild($fragment);
  $app.appendChild($main);

  renderProductPurchaseStatus(products);
  renderChargedMoney();
  renderReturnCoins();
}

export function renderProductPurchaseStatus(products) {
  const $productPurchaseStatus = document.querySelector('#product-purchase-status');

  if (!products) return;
  $productPurchaseStatus.innerHTML = products
    .map(product => {
      return `
        <tr class="product-purchase-item">
          <td class="product-purchase-name" data-product-name="${product.name}">${product.name}</td>
          <td class="product-purchase-price" data-product-price="${product.price}">${product.price}</td>
          <td class="product-purchase-quantity" data-product-quantity="${product.quantity}">${product.quantity}</td>
          <td><button class="purchase-button">구매하기</button></td>
        </tr>`;
    })
    .join('');
}

export function renderReturnCoins() {
  if (!localStorage.getItem('returnCoin')) return;
  const returnCoin = localStorage.getItem('returnCoin').split(',');

  const coins = COINS.map(coin => document.querySelector(`#coin-${coin}-quantity`));

  returnCoin.forEach((coin, i) => {
    coins[i].textContent = `${coin}개`;
  });
}
