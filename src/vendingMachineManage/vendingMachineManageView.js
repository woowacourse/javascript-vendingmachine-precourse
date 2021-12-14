import LocalStorageUtils from '../utils/localStorageUtils.js';
import { $ } from '../utils/common.js';
import { MAIN_ID } from '../utils/constants.js';
import {
  MANAGE_TITLE,
  STATUS_TITLE,
  INPUT,
  BUTTON,
  AMOUNT,
  TABLE,
} from './vendingMachineManageViewInfo.js';

export default class VendingMachineManageView {
  constructor() {
    this.$main = $(MAIN_ID);
  }

  render() {
    this.$main.innerHTML = this.template();
    this.makeTable();
    this.showCoinCount();
    this.showAmountText();
  }

  template() {
    return `
      <h3>${MANAGE_TITLE}</h3>
      <input type=${INPUT.TYPE} id=${INPUT.ID} placeholder="${INPUT.TEXT}" />
      <button id=${BUTTON.ID}>${BUTTON.TEXT}</button>
      <br><br>
      <span>${AMOUNT.TEXT}<span id=${AMOUNT.ID}></span>원</span>
      <br><br>
      <h3>${STATUS_TITLE}</h3>
      <table border="1px" column></table>
    `;
  }

  makeTable() {
    $('table').innerHTML = `
      <tr>
        ${this.makeTableHeader()}
      </tr>
      ${this.makeTableBody()}
    `;
  }

  makeTableHeader() {
    let header = '';
    TABLE.HEADER.forEach((item) => {
      header += `<th>${item}</th>`;
    });
    return header;
  }

  makeTableBody() {
    let body = '';
    TABLE.BODY.forEach((value) => {
      body += `
        <tr>
          <td align="center">${value.TEXT}</td>
          <td align="center"><span id=${value.ID}></span></td>
        <tr>
        `;
    });
    return body;
  }

  showCoinCount() {
    let coinData = LocalStorageUtils.getMachineManageTableItem();
    let coinCountList = Object.values(coinData).reverse();
    TABLE.BODY.forEach((value, index) => {
      $(`#${value.ID}`).textContent = `${coinCountList[index]}개`;
    });
  }

  showAmountText(amount) {
    $(`#${AMOUNT.ID}`).textContent = `${amount}`;
  }
}
