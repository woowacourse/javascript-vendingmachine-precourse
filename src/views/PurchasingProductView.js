import { COIN_LIST, CUSTOM_EVENT_NAME, SELECTOR } from '../constants.js';
import { on, qs, qsAll } from '../utils/index.js';
import {
  checkNumberLessThanZero,
  checkTenDigits,
} from '../utils/validation.js';
import View from './View.js';

export default class PurchasingProductView extends View {
  constructor(element = qs(`#${SELECTOR.PRODUCT_PURCHASE_VIEW}`)) {
    super(element);
    this.template = new Template();

    this.initializeElements();
  }

  initializeElements() {
    this.element.innerHTML = this.template.getInitialElements();
  }

  show([productList, , puttedMoney]) {
    this.initializeElements();
    this.element.innerHTML += this.template.getCanBuyProductList(productList);
    this.element.innerHTML += this.template.getReturnExchangeList(puttedMoney);

    this.vendingMachineChargeInput = qs(`#${SELECTOR.PURCHASE_CHARGE_INPUT}`);
    this.vendingMachineChargeButton = qs(`#${SELECTOR.PURCHASE_CHARGE_BUTTON}`);
    this.currentPuttedMoney = qs(`#${SELECTOR.PURCHASE_CHARGE_AMOUNT}`);
    this.coinReturnButton = qs(`#${SELECTOR.COIN_RETURN_BUTTON}`);

    this.currentPuttedMoney.innerText += puttedMoney.inputMoney;

    this.bindEvents();
    super.show();
  }

  bindEvents() {
    const buttons = qsAll(`.${SELECTOR.PRODUCT_PURCHASE_ITEM}`);
    const names = qsAll(`.${SELECTOR.PRODUCT_PURCHASE_NAME}`);
    const prices = qsAll(`.${SELECTOR.PRODUCT_PURCHASE_PRICE}`);
    const quantities = qsAll(`.${SELECTOR.PURCHASE_ITEM_QUANTITY}`);

    buttons.forEach((button, index) => {
      on(button, 'click', () =>
        this.handlePurchse(names, prices, quantities, index),
      );
    });
    on(this.vendingMachineChargeButton, 'click', () =>
      this.handleChargePuttedMoney(),
    );

    on(this.coinReturnButton, 'click', () => this.handleReturnExchanges());
  }

  handleReturnExchanges() {
    this.emit(CUSTOM_EVENT_NAME.RETURN_EXCHANGES);
  }

  handleChargePuttedMoney() {
    const { value: puttedMoney } = this.vendingMachineChargeInput;

    if (checkNumberLessThanZero(Number(puttedMoney))) return;
    if (!checkTenDigits(Number(puttedMoney))) return;

    this.emit(CUSTOM_EVENT_NAME.ADD_PUTTED_MONEY, { puttedMoney });
  }

  handlePurchse(names, prices, quantities, index) {
    const name = names[index].dataset.productName;
    const price = prices[index].dataset.productPrice;
    const quantity = quantities[index].dataset.productQuantity;
    const product = { name, price, quantity };
    this.emit(CUSTOM_EVENT_NAME.PURCHASE_PRODUCT, { product });
  }
}

class Template {
  getInitialElements() {
    return `<h3>금액 투입</h3>
      <input id="${SELECTOR.PURCHASE_CHARGE_INPUT}" type="number" placeholder="투입할 금액" />
      <button id="${SELECTOR.PURCHASE_CHARGE_BUTTON}">투입하기</button>
      <br /><br />
      <span>투입한 금액: </span>
      <span id="${SELECTOR.PURCHASE_CHARGE_AMOUNT}"></span>
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
      <tr class="${SELECTOR.PRODUCT_PURCHASE_ITEM}">
        <td class="${SELECTOR.PRODUCT_PURCHASE_NAME}" data-product-name=${name}>${name}</td>
        <td class="${SELECTOR.PRODUCT_PURCHASE_PRICE}" data-product-price=${price}>${price}</td>
        <td class="${SELECTOR.PURCHASE_ITEM_QUANTITY}" data-product-quantity=${quantity}>${quantity}</td>
        <td class="${SELECTOR.PRODUCT_MANAGE_QUANTITY}">
          <button class="${SELECTOR.PURCHASE_ITEM_BUTTON}">구매하기</button>
        </td>
      </tr>
    `;
  }

  getReturnExchangeList(changeList) {
    return `
      <h3>잔돈</h3>
      <button id="${SELECTOR.COIN_RETURN_BUTTON}">반환하기</button>
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
            <td id="${SELECTOR.COIN_500_QUANTITY}">${
      changeList.returnedCoins[COIN_LIST.FIVE_HUNDRED]
    }개</td>
          </tr>
          <tr>
            <td>100</td>
            <td id="${SELECTOR.COIN_100_QUANTITY}">${
      changeList.returnedCoins[COIN_LIST.ONE_HUNDRED]
    }개</td>
          </tr>
          <tr>
            <td>50</td>
            <td id="${SELECTOR.COIN_50_QUANTITY}">${
      changeList.returnedCoins[COIN_LIST.FIFTY]
    }개</td>
          </tr>
          <tr>
            <td>10</td>
            <td id="${SELECTOR.COIN_10_QUANTITY}">${
      changeList.returnedCoins[COIN_LIST.TEN]
    }개</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
