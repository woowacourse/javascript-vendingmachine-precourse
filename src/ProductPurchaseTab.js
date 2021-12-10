import ProductPurchaseTabView from './views/ProductPurchaseTabView.js';
import { getCharge, getProducts, setCharge, setProducts } from './utils/localStorage.js';

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
    this.setPurchaseButtonClickEvent();
  }

  setPurchaseButtonClickEvent() {
    const purchaseButtons = document.querySelectorAll('.purchase-button');
    purchaseButtons.forEach((button) => {
      button.addEventListener('click', this.onClickPurchaseButton.bind(this));
    });
  }

  onClickChargeButton(e) {
    e.preventDefault();
    const amountToBeCharged = Number(this.chargeInput.value);
    this.charge += amountToBeCharged;
    setCharge(this.charge);
    this.view.updateChargeAmount(this.charge);
    this.clearInputValue();
  }

  onClickPurchaseButton(e) {
    const { productName, productPrice, productQuantity } = e.target.dataset;
    const productIndex = this.products.findIndex((product) => product.name === productName);
    if ( this.charge < productPrice ) return;
    this.charge -= productPrice;
    this.products[productIndex] = { ...this.products[productIndex], quantity: productQuantity - 1,  };
    setCharge(this.charge);
    setProducts(this.products);
    this.updateViewOnPurchase();
  }

  updateViewOnPurchase() {
    this.view.updateChargeAmount(this.charge);
    this.view.updateTable(this.products);
    this.setPurchaseButtonClickEvent();
  }

  clearInputValue() {
    this.chargeInput.value = '';
  }
}
