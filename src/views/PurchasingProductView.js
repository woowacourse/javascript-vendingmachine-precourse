import { on, qs, qsAll } from '../utils/index.js';
import View from './View.js';

export default class PurchasingProductView extends View {
  constructor(element = qs('#product-purchase-view')) {
    super(element);
    this.template = new Template();

    this.initializeElements();
  }

  initializeElements() {
    this.element.innerHTML = this.template.getInitialElements();
  }

  show([productList, chargeList, puttedMoney]) {
    this.initializeElements();
    this.element.innerHTML += this.template.getCanBuyProductList(productList);
    this.element.innerHTML += this.template.getReturnExchangeList(puttedMoney);

    this.vendingMachineChargeInput = qs('#charge-input');
    this.vendingMachineChargeButton = qs('#charge-button');
    this.currentPuttedMoney = qs('#charge-amount');
    this.currentPuttedMoney.innerText += puttedMoney.inputMoney;
    this.coinReturnButton = qs('#coin-return-button');

    this.bindEvents();
    super.show();
  }

  bindEvents() {
    this.handlePurchse();
    this.handleChargePuttedMoney();
    this.handleReturnExchanges();
  }

  handleReturnExchanges() {
    on(this.coinReturnButton, 'click', () => {
      this.emit('@returnExchanges');
    });
  }

  handleChargePuttedMoney() {
    on(this.vendingMachineChargeButton, 'click', () => {
      const { value: puttedMoney } = this.vendingMachineChargeInput;
      this.emit('@addPuttedMoney', { puttedMoney });
    });
  }

  handlePurchse() {
    const buttons = qsAll('.product-purchase-item');
    const names = qsAll('.product-purchase-name');
    const prices = qsAll('.product-purchase-price');
    const quantities = qsAll('.product-purchase-quantity');

    buttons.forEach((button, index) => {
      on(button, 'click', () => {
        const name = names[index].dataset.productName;
        const price = prices[index].dataset.productPrice;
        const quantity = quantities[index].dataset.productQuantity;
        const product = { name, price, quantity };
        this.emit('@purchaseProduct', { product });
      });
    });
  }
}

class Template {
  getInitialElements() {
    return `<h3>금액 투입</h3>
      <input id="charge-input" type="number" placeholder="투입할 금액" />
      <button id="charge-button">투입하기</button>
      <br /><br />
      <span id="charge-amount">투입한 금액: </span>
    `;
  }

  getCanBuyProductList(productList) {
    return `
      <h3>구매할 수 있는 상품 현황</h3>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매</th>
          </tr>
        </thead>
        <tbody>${productList
          .map((product) => this.getProduct(product))
          .join('')}
        </tbody>
      </table>`;
  }

  getProduct({ name, price, quantity }) {
    return `
      <tr class="product-purchase-item">
        <td class="product-purchase-name" data-product-name=${name}>${name}</td>
        <td class="product-purchase-price" data-product-price=${price}>${price}</td>
        <td class="product-purchase-quantity" data-product-quantity=${quantity}>${quantity}</td>
        <td class="product-manage-quantity">
          <button class="purchase-button">구매하기</button>
        </td>
      </tr>
    `;
  }

  getReturnExchangeList(changeList) {
    return `
      <h3>잔돈</h3>
      <button id="coin-return-button">반환하기</button>
      <table>
        <thead>
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>500</td>
            <td id="coin-500-quantity">${changeList.returnedCoins['500']}</td>
          </tr>
          <tr>
            <td>100</td>
            <td id="coin-100-quantity">${changeList.returnedCoins['100']}</td>
          </tr>
          <tr>
            <td>50</td>
            <td id="coin-50-quantity">${changeList.returnedCoins['50']}</td>
          </tr>
          <tr>
            <td>10</td>
            <td id="coin-10-quantity">${changeList.returnedCoins['10']}</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
