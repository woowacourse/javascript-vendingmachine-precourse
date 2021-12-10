export default class VendingMachine {
  constructor(coins, product) {
    this.coins = coins;
    this.product = product;
  }

  getCurrentProductStatus = () => {
    return this.product.productsInformation;
  };
}
