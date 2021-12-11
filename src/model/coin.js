export default class Coin {
  constructor(kinds, amount) {
    this.kinds = kinds;
    this.amount = amount;
  }

  get obj() {
    const key = `${String(this.kinds)}원`;
    return { [key]: this.amount };
  }
}
