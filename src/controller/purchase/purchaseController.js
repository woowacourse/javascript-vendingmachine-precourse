import PurchaseView from '../../view/purchase/purchaseView.js';
import { isValidChargeAmount } from '../../utils/validator.js';
import { showError } from '../../utils/error.js';
import { STRING } from '../../constants/constants.js';
import { $ } from '../../utils/DOMhelper.js';

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
    this.purchaseView.$$purchaseItem.forEach((element) =>
      element.addEventListener('click', this.handlePurchase.bind(this))
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

  handlePurchase(e) {
    if (e.target.type === STRING.SUBMIT) {
      this.purchaseView.selectProductTableRowDOM(e.target);
      const { productName } = this.purchaseView.$productNameColumn.dataset;
      const { productPrice } = this.purchaseView.$productPriceColumn.dataset;

      const changedQuantity = this.appModel.decreaseProductQuantity(productName);
      this.purchaseView.renderProductQuantity(changedQuantity);

      this.appModel.decreaseInputChargeAmount(productPrice);
      this.purchaseView.renderInputChargeAmount(this.appModel.inputChargeAmount);
    }
  }
}
