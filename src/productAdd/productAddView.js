import LocalStorageUtils from '../utils/localStorageUtils.js';
import { $ } from '../utils/common.js';
import { ADD_TITLE, STATUS_TITLE, INPUT, BUTTON, TABLE } from './productAddViewInfo.js';
import { MAIN_ID } from '../utils/constants.js';

export default class ProductAddView {
  constructor() {
    this.$main = $(MAIN_ID);
  }

  render() {
    this.$main.innerHTML = this.template();
    this.makeTable();
  }

  template() {
    return `
      <h3>${ADD_TITLE}</h3>
      ${this.makeInputForm()}
      <button id=${BUTTON.ID}>${BUTTON.TEXT}</button>
      <br><br>
      <h3>${STATUS_TITLE}</h3>
      <table border="1px"></table>
    `;
  }

  makeInputForm() {
    let inputHTML = '';
    Object.values(INPUT).forEach((value) => {
      inputHTML += ` <input type=${value.TYPE} id=${value.ID} placeholder="${value.TEXT}" />`;
    });
    return inputHTML;
  }

  clearInputForm() {
    Object.values(INPUT).forEach((value) => {
      $(`#${value.ID}`).value = '';
    });
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
    const data = LocalStorageUtils.getProductAddItem();
    let body = '';
    data.forEach((item) => {
      body += this.tableBodyTemplate(item);
    });
    return body;
  }

  tableBodyTemplate(item) {
    return `
      <tr>
        <td class=${TABLE.BODY.CLASS}>
          <span class=${TABLE.BODY.ITEM.NAME_CLASS}>${item.name}</span>
        </td>
        <td class=${TABLE.BODY.CLASS}>
          <span class=${TABLE.BODY.ITEM.PRICE_CLASS}>${item.price}</span>원
        </td>
        <td class=${TABLE.BODY.CLASS}>
          <span class=${TABLE.BODY.ITEM.QUANTITY_CLASS}>${item.quantity}</span>개
        </td>
      </tr>`;
  }
}
