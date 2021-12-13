import {
  PURCHASE_ELEMENT_CLASS,
  PURCHASE_ELEMENT_ID,
} from '../constants/constants.js';
import TapView from './tapView.js';

export default class PurchaseView extends TapView {
  static render() {
    super.removeTap();
    super.appendComponentToApp(this.purchaseComponent());
  }

  static purchaseComponent() {
    const divEl = document.createElement('div');
    divEl.id = 'tap';
    super.addHtmlToElement(divEl, this.chargeInputComponent());
    super.addHtmlToElement(divEl, this.purchaseProductComponent());
    super.addHtmlToElement(divEl, this.changeMoneyComponent());
    return divEl;
  }

  static chargeInputComponent() {
    return `
    <h3>금액 투입</h3>
    <input id=${PURCHASE_ELEMENT_ID.chargeInput} type='number' placeholder='투입할 금액'></input>
    <button id=${PURCHASE_ELEMENT_ID.chargeButton}>충전하기</button>
    </br></br>
    <span id=${PURCHASE_ELEMENT_ID.chargeAmount}><span>
    `;
  }

  static updateChargeInput(purchaseObject) {
    super.setHtmlToElement(
      document.querySelector(`#${PURCHASE_ELEMENT_ID.chargeAmount}`),
      `${purchaseObject.getChargeMoneyStorage() || 0}`,
    );
  }

  static purchaseProductComponent() {
    return `
    </br></br>
    <h3>구매할 수 있는 상품 현황</h3>
    <table border="1">
      <td>상품명</td>
      <td>가격</td>
      <td>수량</td>
      <td>구매</td>
    </table>
    `;
  }

  static addPurchaseProductList(adminObject) {
    const productStorage = adminObject.getProductStorage();
    if (productStorage) {
      productStorage.forEach((product) => {
        super.addHtmlToElement(
          document.querySelector('table'),
          this.purchaseProductTable(product),
        );
      });
    }
  }

  static purchaseProductTable({ name, price, quantity }) {
    return `
    <tr class=${PURCHASE_ELEMENT_CLASS.productPurchaseItem}>
      <td class=${PURCHASE_ELEMENT_CLASS.productPurchaseName} data-product-name=${name}>${name}</td>
      <td class=${PURCHASE_ELEMENT_CLASS.productPurchasePrice} data-product-price=${price}>${price}</td>
      <td class=${PURCHASE_ELEMENT_CLASS.productPurchaseQuantity} data-product-quantity=${quantity}>${quantity}</td>
      <td><button class=${PURCHASE_ELEMENT_CLASS.purchaseButton}>구매하기</button></td>
    </tr>
    `;
  }

  static changeMoneyComponent() {
    return `
    </br></br>
    <h3>잔돈</h3>
		<button id=${PURCHASE_ELEMENT_ID.coinReturnButton}>반환하기</button>
    <table border="1">
      <td>동전</td>
      <td>개수</td>
      ${this.coinTable(PURCHASE_ELEMENT_ID.coin500, 500)}
      ${this.coinTable(PURCHASE_ELEMENT_ID.coin100, 100)}
      ${this.coinTable(PURCHASE_ELEMENT_ID.coin50, 50)}
      ${this.coinTable(PURCHASE_ELEMENT_ID.coin10, 10)}
    </table>
    `;
  }

  static coinTable(id, coinType) {
    return `
    <tr>
      <td>${coinType}원</td>
      <td id=${id}></td>
    </tr>
    `;
  }

  static addReturnCoins([coin500, coin100, coin50, coin10]) {
    document.querySelector(`#${PURCHASE_ELEMENT_ID.coin500}`).innerHTML =
      coin500;
    document.querySelector(`#${PURCHASE_ELEMENT_ID.coin100}`).innerHTML =
      coin100;
    document.querySelector(`#${PURCHASE_ELEMENT_ID.coin50}`).innerHTML = coin50;
    document.querySelector(`#${PURCHASE_ELEMENT_ID.coin10}`).innerHTML = coin10;
  }
}
