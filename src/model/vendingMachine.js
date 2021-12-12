export default class VendingMachine {
  constructor(changes) {
    this.changes = changes;
    this.coins = [
      { coin: 500, quantity: 0 },
      { coin: 100, quantity: 0 },
      { coin: 50, quantity: 0 },
      { coin: 10, quantity: 0 },
    ];
  }
}
