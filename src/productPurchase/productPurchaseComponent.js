import ProductPurchaseView from './productPurchaseView.js';
import ValidateUtils from '../utils/validateUtils.js';
import { $ } from '../utils/common.js';
import { BUTTON, INPUT } from './productPurchaseViewInfo.js';

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

  onClickChargeButton = () => {
    const inputMoney = Number($(`#${INPUT.ID}`).value);
    if (ValidateUtils.checkInputAmount(inputMoney)) {
      this.chargeMoney += inputMoney;
      this.productPurchaseView.showAmountText(this.chargeMoney);
    }
  };

  onClickPurchaseButton = (event) => {};

  onClickChagesButton = () => {};
}
