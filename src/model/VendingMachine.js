import { TEMPLATE } from '../utils/constant.js';

export default class VendingMachine {
  constructor(render, coins, product) {
    this.render = render;
    this.coins = coins;
    this.product = product;
    this.totalChargeAmount = 0;
  }

  renderChargeInput = () => {
    this.render.chargeInputTemplate(TEMPLATE.CHARGE_INPUT(this.totalChargeAmount));
  };

  setChargeInput = (chargeInput) => {
    this.totalChargeAmount += chargeInput;
  };

  getCurrentProductStatus = () => this.product.productsInformation;
}
