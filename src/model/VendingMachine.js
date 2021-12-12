export default class VendingMachine {
  constructor(coins, product, totalChargeAmount) {
    this.coins = coins;
    this.product = product;
    this.totalChargeAmount = totalChargeAmount;
  }

  decreaseChargeAmount = (productPrice) => {
    if (productPrice > this.totalChargeAmount) {
      return false;
    }

    this.totalChargeAmount -= productPrice;
    return true;
  };

  replaceChargeAmount = (chargeAmount) => {
    this.totalChargeAmount = chargeAmount;
  };

  getChargeAmount = () => this.totalChargeAmount;

  setChargeAmount = (chargeInput) => {
    this.totalChargeAmount += chargeInput;
  };

  getCurrentProductStatus = () => this.product.productsInformation;
}
