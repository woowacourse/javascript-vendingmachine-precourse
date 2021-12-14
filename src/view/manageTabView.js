import { MANAGE_TEMPLATE } from '../constant.js';

export default class ManageTabView {
  constructor() {
    this.container = document.getElementById('tabContent');
  }

  render(productList) {
    this.container.innerHTML = MANAGE_TEMPLATE;
    this.tableBody = document.querySelector('#product-add-table > tbody');
    this.addProductToTable(productList);
  }

  addProductToTable(productList) {
    productList.forEach((product) => {
      this.tableBody.innerHTML += `<tr>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
  </tr>`;
    });
  }
}
