import PurchaseView from '../../view/purchase/purchaseView.js';
import { isValidChargeAmount } from '../../utils/validator.js';
import { showError } from '../../utils/error.js';

export default class PurchaseController {
  constructor(appModel) {
    this.purchaseView = new PurchaseView();
    this.appModel = appModel;
  }

  init() {
    this.purchaseView.init();

    this.purchaseView.renderPurchaseTab(this.appModel.products, this.appModel.inputChargeAmount);
    this.purchaseView.selectPurchaseTabDOM();
    this.attachPurchaseTabEvents();
  }

  attachPurchaseTabEvents() {
    this.purchaseView.$chargeInputForm.addEventListener(
      'submit',
      this.handleInputCharge.bind(this)
    );
  }

  handleInputCharge(e) {
    e.preventDefault();

    const inputChargeAmount = this.purchaseView.$chargeInput.value;

    if (isValidChargeAmount(inputChargeAmount)) {
      this.appModel.setInputChargeAmount(Number(inputChargeAmount));
      this.purchaseView.renderInputChargeAmount(this.appModel.inputChargeAmount);
      return console.log(inputChargeAmount);
    }

    showError();

    console.log(inputChargeAmount);
  }
}
