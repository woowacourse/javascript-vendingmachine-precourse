export default class VendingMachine {
  constructor(change) {
    this.change = change;
    this.coins = [
      { coin: 500, quantity: 0 },
      { coin: 100, quantity: 0 },
      { coin: 50, quantity: 0 },
      { coin: 10, quantity: 0 },
    ];
  }
}
