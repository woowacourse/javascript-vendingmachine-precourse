import ProductPurchaseTabView from './views/ProductPurchaseTabView.js';
import { getCharge, getProducts, setCharge } from './utils/localStorage.js';

export default class ProductPurchaseTab {
  constructor() {
    this.view = new ProductPurchaseTabView();
  }

  initialize() {
    this.charge = getCharge();
    this.products = getProducts();
    this.view.render(this.charge, this.products);
    this.initInputElements();
    this.setButtonClickEvent();
  }

  initInputElements() {
    this.chargeInput = document.querySelector('#charge-input');
  }

  setButtonClickEvent() {
    const chargeButton = document.querySelector('#charge-button');
    chargeButton.addEventListener('click', this.onClickChargeButton.bind(this));
  }

  onClickChargeButton(e) {
    e.preventDefault();
    const amountToBeCharged = Number(this.chargeInput.value);
    this.charge += amountToBeCharged;
    setCharge(this.charge);
    this.view.renderChargeAmount(this.charge);
    this.clearInputValue();
  }

  clearInputValue() {
    this.chargeInput.value = '';
  }
}
