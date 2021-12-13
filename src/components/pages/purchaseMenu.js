import { PURCHASE_MENU } from '../../data/elementData.js';

export default class PurchaseMenu {
  constructor() {
    this.$main = document.createElement('main');
    this.template = this.purchaseMenuTemplate();
    this.closeMenu();
  }

  closeMenu() {
    this.$main.style.display = 'none';
  }

  showMenu() {
    this.$main.style.display = 'block';
  }

  purchaseMenuTemplate() {
    this.$main.insertAdjacentHTML('beforeend', `${this.inputTemplate()}${this.purchaseTableTemplate()}${this.chargeTableTemplate()}`);
  }

  inputTemplate() {
    return `<h3>금액 투입</h3>
      <form>
        <input type="number" step="10" id="${PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_INPUT}" placeholder="투입할 금액">
        <button id="${PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_BUTTON}">투입하기</button>
        <p>투입한 금액:<span id="${PURCHASE_MENU.INPUT_SELECTOR.PURCHASE_CHARGE_AMOUNT}"></span></p>
      </form>`;
  }

  purchaseTableTemplate() {
    return `<h3>구매할 수 있는 상품 현황</h3>
      <table style="border-collapse: collapse;" width=400 border="1">
      <thead style="text-align: center;">
        <tr>
          <td>상품명</td>
          <td>가격</td>
          <td>수량</td>
          <td>구매</td>
        </tr>
      </thead>
      <tbody id = "product-purchase-table" style="text-align: center;">
      </tbody>
      </table>`;
  }

  chargeTableTemplate() {
    return `<h3>잔돈</h3>
      <button id="${PURCHASE_MENU.COIN_RETURN_BUTTON}">반환하기</button>
      <table style="border-collapse: collapse;" width=200 border="1">
      <thead style="text-align: center;">
        <tr>
          <td>동전</td>
          <td>개수</td>
        </tr>
      </thead>
      <tbody style="text-align: center;">
        <tr>
          <td>500원</td>
          <td id="${PURCHASE_MENU.RETURN_TABLE_SELECTOR.COIN_500}"></td>
        </tr>
        <tr>
          <td>100원</td>
          <td id="${PURCHASE_MENU.RETURN_TABLE_SELECTOR.COIN_100}"></td>
        </tr>
        <tr>
          <td>50원</td>
          <td id="${PURCHASE_MENU.RETURN_TABLE_SELECTOR.COIN_50}"></td>
        </tr>
        <tr>
          <td>10원</td>
          <td id="${PURCHASE_MENU.RETURN_TABLE_SELECTOR.COIN_10}"></td>
        </tr>
      </tbody>
      </table>`;
  }

  purchaseItemTemplate(product) {
    return `<tr id="${PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.PRODUCT_PURCHASE_ITEM}">
        <td data-product-name="${product.name}" class="${PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.PRODUCT_NAME}">${product.name}</td>
        <td class="${PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.PRODUCT_PRICE}">${product.price}</td>
        <td class="${PURCHASE_MENU.PRODUCT_TABLE_SELECTOR.PRODUCT_QUANTITY}">${product.quantity}</td>
        <td><button class="${PURCHASE_MENU.PURCHASE_ITEM_BUTTON}">구매하기</button></td>
      </tr>`;
  }
}
