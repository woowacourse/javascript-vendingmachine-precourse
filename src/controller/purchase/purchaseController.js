import PurchaseView from '../../view/purchase/purchaseView.js';
import { isValidChargeAmount, isValidPurchase } from '../../utils/validator.js';
import { showError } from '../../utils/error.js';
import { STRING } from '../../constants/constants.js';
import { exchangeWithCoins } from './exchange.js';

export default class PurchaseController {
  constructor(appModel) {
    this.purchaseView = new PurchaseView();
    this.appModel = appModel;
  }

  init() {
    this.purchaseView.init();

    this.purchaseView.renderPurchaseTab(
      this.appModel.products,
      this.appModel.inputChargeAmount,
      this.appModel.purchaseTabInput
    );
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
    this.purchaseView.$coinReturnButton.addEventListener('click', this.handleReturn.bind(this));
    this.purchaseView.$chargeInput.addEventListener('input', this.handleInputChange.bind(this));
  }

  handleInputCharge(e) {
    e.preventDefault();

    const inputChargeAmount = this.purchaseView.$chargeInput.value;

    if (isValidChargeAmount(inputChargeAmount)) {
      this.addChargeAmount(inputChargeAmount);
      return this.purchaseView.renderInputChargeAmount(this.appModel.inputChargeAmount);
    }

    return showError();
  }

  addChargeAmount(inputChargeAmount) {
    this.appModel.addInputChargeAmount(Number(inputChargeAmount));
    this.appModel.setInputChargeAmount(this.appModel.inputChargeAmount);
  }

  handlePurchase(e) {
    if (e.target.type === STRING.SUBMIT) {
      this.purchaseView.selectProductTableRowDOM(e.target);

      const selectedProduct = this.getSelectedProduct();

      if (isValidPurchase(this.appModel.inputChargeAmount, selectedProduct)) {
        return this.purchase(selectedProduct);
      }

      return showError();
    }
  }

  purchase({ productName, productPrice }) {
    const changedQuantity = this.appModel.decreaseProductQuantity(productName);
    this.purchaseView.renderProductQuantity(changedQuantity);

    this.appModel.decreaseInputChargeAmount(productPrice);
    this.purchaseView.renderInputChargeAmount(this.appModel.inputChargeAmount);
  }

  getSelectedProduct() {
    const { productName } = this.purchaseView.$productNameColumn.dataset;
    const { productPrice } = this.purchaseView.$productPriceColumn.dataset;
    const { productQuantity } = this.purchaseView.$productQuantityColumn.dataset;

    return { productName, productPrice, productQuantity };
  }

  handleReturn(e) {
    e.preventDefault();
    const { returnedCoins, remainedInputChargeAmount } = exchangeWithCoins(
      this.appModel.inputChargeAmount,
      this.appModel
    );

    this.appModel.setInputChargeAmount(remainedInputChargeAmount);
    this.purchaseView.renderInputChargeAmount(this.appModel.inputChargeAmount);

    this.purchaseView.renderReturnedCoins(returnedCoins);
  }

  handleInputChange(e) {
    const { value } = e.target;

    this.appModel.setPurchaseTabInput(value);
  }
}
