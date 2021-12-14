import LocalStorageUtils from '../utils/localStorageUtils.js';
import { MAIN_ID } from '../utils/constants.js';
import { $ } from '../utils/common.js';
import {
  CHARGE_TITLE,
  PURCHASE_TITLE,
  CHANGES_TITLE,
  INPUT,
  BUTTON,
  CHARGE_AMOUNT,
  PUCHASE_TABLE,
  CHANGES_TABLE,
} from './productPurchaseViewInfo.js';

export default class productPurchaseView {
  constructor() {
    this.$main = $(MAIN_ID);
  }

  render() {
    this.$main.innerHTML = `
      ${this.renderChargePart()}
      <br><br>
      ${this.renderPurchasePart()}
      ${this.renderChangesPart()}
    `;
  }

  renderChargePart() {
    return `
      <h3>${CHARGE_TITLE}</h3>
      <input type="${INPUT.TYPE}" id=${INPUT.ID} placeholder="${INPUT.TEXT}"/>
      <button id=${BUTTON.CHARGE.ID}>${BUTTON.CHARGE.TEXT}</button>
      <br><br>
      <span>${CHARGE_AMOUNT.TEXT}<span id=${CHARGE_AMOUNT.ID}>0</span>원</span>
    `;
  }

  renderPurchasePart() {
    return `
      <h3>${PURCHASE_TITLE}</h3>
      <table border="1px">${this.makePurchaseTable()}</table>
    `;
  }

  renderChangesPart() {
    return `
      <h3>${CHANGES_TITLE}</h3>
      <button id=${BUTTON.CHANGES.ID}>${BUTTON.CHANGES.TEXT}</button>
      <table border="1px">${this.makeChangesTable()}</table>
    `;
  }

  makePurchaseTable() {
    return `
      <tr>
        ${this.makePurchaseTableHeader()}
      </tr>
      ${this.makePurchaseTableBody()}
      `;
  }

  makePurchaseTableHeader() {
    let header = '';
    PUCHASE_TABLE.HEADER.forEach((item) => {
      header += `<th>${item}</th>`;
    });
    return header;
  }

  makePurchaseTableBody() {
    let body = '';
    const data = LocalStorageUtils.getProductAddItem();

    data.forEach((item) => {
      body += `
        <tr class=${PUCHASE_TABLE.BODY.CLASS}>
          ${this.purchaseTableBodyTemplate(item)}
        </tr>
      `;
    });
    return body;
  }

  purchaseTableBodyTemplate(item) {
    const bodyItemInfo = PUCHASE_TABLE.BODY.ITEM;
    return `
      <td ${bodyItemInfo.NAME.DATA}=${item.name}>
        <span class=${bodyItemInfo.NAME.CLASS} >${item.name}</span>
      </td>
      <td ${bodyItemInfo.PRICE.DATA}=${item.price}>
        <span class=${bodyItemInfo.PRICE.CLASS} >${item.price}</span>원
      </td>
      <td ${bodyItemInfo.QUANTITY.DATA}=${item.quantity}>
        <span class=${bodyItemInfo.QUANTITY.CLASS}>${item.quantity}</span>개
      </td>
      <td><button class=${BUTTON.PURCHASE.CLASS}>${BUTTON.PURCHASE.TEXT}</button></td>
    `;
  }

  updatePurchaseTableQuantity() {
    const data = LocalStorageUtils.getProductAddItem();
    const bodyItemInfo = PUCHASE_TABLE.BODY.ITEM;
    const quantityTds = document.querySelectorAll(`.${bodyItemInfo.QUANTITY.CLASS}`);
    data.forEach((item, index) => {
      quantityTds[index].innerText = item.quantity;
    });
  }

  makeChangesTable() {
    return `
      <tr>
        ${this.makeChangesTableHeader()}
      </tr>
      ${this.makeChangesTableBody()}
    `;
  }

  makeChangesTableHeader() {
    let header = '';
    CHANGES_TABLE.HEADER.forEach((item) => {
      header += `<th>${item}</th>`;
    });
    return header;
  }

  makeChangesTableBody() {
    let body = '';
    CHANGES_TABLE.BODY.forEach((value) => {
      body += `
        <tr>
          <td align="center">${value.TEXT}</td>
          <td align="center"><span id=${value.ID}>0</span>개</td>
        <tr>
        `;
    });
    return body;
  }

  updateChangesTableCount(coins) {
    const coinCountList = Object.values(coins).reverse();
    CHANGES_TABLE.BODY.forEach((item, index) => {
      $(`#${item.ID}`).textContent = `${coinCountList[index]}`;
    });
  }

  showAmountText(chargeMoney) {
    $(`#${CHARGE_AMOUNT.ID}`).textContent = `${chargeMoney}`;
  }
}
