export default class Model {
  constructor() {
    this.product = JSON.parse(localStorage.getItem("product")) || [];
    this.coin = JSON.parse(localStorage.getItem("coin")) || [0, 0, 0, 0];
  }

  bindProductChange(callback) {
    this.onProductChange = callback;
  }

  bindCoinChange(callback) {
    this.onCoinChange = callback;
  }

  commitProduct(product) {
    this.onProductChange(product);
    localStorage.setItem("product", JSON.stringify(product));
  }

  commitCoin(coin) {
    this.onCoinChange(coin);
    localStorage.setItem("coin", JSON.stringify(coin));
  }

  addProduct(name, price, quantity) {
    let flag = true;
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].name === name && this.product[i].price === price) {
        this.product[i].quantity += +quantity;
        flag = false;
      } else if (this.product[i].name === name) {
        alert("🚨 기존의 상품과 동일한 가격을 입력해 주세요");
        flag = false;
      }
    }

    if (flag) this.product.push({ name, price, quantity: +quantity });

    this.commitProduct(this.product);
  }

  addCoin(coins) {
    this.coin = coins;
    this.commitCoin(this.coin);
  }
}
