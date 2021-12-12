export default class VendingMachine {
  constructor() {
    this.input = document.querySelector('#vending-machine-charge-input');
    this.btn = document.querySelector('#vending-machine-charge-button');
    this.amount = document.querySelector('#vending-machine-charge-amount');
    this.coin500 = document.querySelector('#vending-machine-coin-500-quantity');
    this.coin100 = document.querySelector('#vending-machine-coin-100-quantity');
    this.coin50 = document.querySelector('#vending-machine-coin-50-quantity');
    this.coin10 = document.querySelector('#vending-machine-coin-10-quantity');
  }
}
