import { BUY_TEMPLATE } from '../constant.js';

export default class BuyProductTabView {
  constructor() {
    this.container = document.getElementById('tabContent');
  }

  render(productList) {
    this.container.innerHTML = BUY_TEMPLATE;
    this.tableBody = document.querySelector('#product-purchase-table > tbody');
    this.addProductToTable(productList);
  }

  addProductToTable(productList) {
    productList.forEach((product) => {
      this.tableBody.innerHTML += `<tr>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
      <td><button calss="purchase-button">구매하기</button></td>
  </tr>`;
    });
  }
}
