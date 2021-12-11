export default class VendingMachine {
  constructor(coins, product, totalChargeAmount) {
    this.coins = coins;
    this.product = product;
    this.totalChargeAmount = totalChargeAmount;
  }

  getChargeAmount = () => this.totalChargeAmount;

  setChargeAmount = (chargeInput) => {
    this.totalChargeAmount += chargeInput;
  };

  getCurrentProductStatus = () => this.product.productsInformation;
}
