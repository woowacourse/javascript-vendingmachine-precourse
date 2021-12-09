export default class Model {
  constructor() {
    this.product = JSON.parse(localStorage.getItem("product")) || [];
    this.coin = JSON.parse(localStorage.getItem("coin")) || [];
  }
}
