import ProductPurchaseView from './productPurchaseView.js';
import { $ } from '../utils/common.js';
import { BUTTON } from './productPurchaseViewInfo.js';

export default class productPurchaseComponent {
  constructor() {
    this.productPurchaseView = new ProductPurchaseView();
    this.chargeMoney = 0;
  }

  configureButtons() {
    $(`#${BUTTON.CHARGE.ID}`).addEventListener('click', this.onClickChargeButton);
    $(`#${BUTTON.CHANGES.ID}`).addEventListener('click', this.onClickChagesButton);
    document.querySelectorAll(`.${BUTTON.PURCHASE.CLASS}`).forEach((button) => {
      button.addEventListener('click', this.onClickPurchaseButton);
    });
  }

  onClickChargeButton = () => {};

  onClickPurchaseButton = (event) => {};

  onClickChagesButton = () => {};
}
