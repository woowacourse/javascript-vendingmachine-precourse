export default class ProductPurchase {
  constructor() {
    this.input = document.querySelector('#charge-input');
    this.btn = document.querySelector('#charge-button');
    this.amount = document.querySelector('#charge-amount');
    this.tableBody = document.querySelector('#product-purchase-table');
    this.coin500 = document.querySelector('#coin-500-quantity');
    this.coin100 = document.querySelector('#coin-100-quantity');
    this.coin50 = document.querySelector('#coin-50-quantity');
    this.coin10 = document.querySelector('#coin-10-quantity');
  }
}
