import { setStateToLocalStorage } from '../utils/localStorage.js';

export class Component {
  constructor($state) {
    this.$state = $state;
  }

  getProducts() {
    return this.$state.products;
  }

  getCharge() {
    return this.$state.charge;
  }

  getCoins() {
    return this.$state.coins;
  }

  getAmount() {
    let amount = 0;
    const coins = this.getCoins();
    for (let key in coins) {
      amount += key * coins[key];
    }
    return amount;
  }

  setStateOfProduct(newState) {
    this.$state.products = [...this.$state.products, newState];
    this.render();
    setStateToLocalStorage(this.$state);
  }

  setStateOfCoin(newState) {
    this.$state.coins = newState;
    this.render();
    setStateToLocalStorage(this.$state);
  }

  setStateOfCharge(newState) {
    this.$state.charge += newState;
    this.render();
    setStateToLocalStorage(this.$state);
  }
}
