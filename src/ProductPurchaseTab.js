import ProductPurchaseTabView from './views/ProductPurchaseTabView.js';
import { getCharge, getProducts, getVendingMachineCharge, setCharge, setProducts, setVendingMachineCharge } from './utils/localStorage.js';
import { coinIndex } from './utils/index.js';
import { coinList } from './constants/index.js';
import { isValidChargeAmount, isValidPurchase } from './utils/validations.js';

export default class ProductPurchaseTab {
  constructor() {
    this.view = new ProductPurchaseTabView();
  }

  initialize() {
    this.charge = getCharge();
    this.products = getProducts();
    this.vendingMachineCharge = getVendingMachineCharge();
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
    this.setCoinReturnButtonClickEvent();
  }

  setPurchaseButtonClickEvent() {
    const purchaseButtons = document.querySelectorAll('.purchase-button');
    purchaseButtons.forEach((button) => {
      button.addEventListener('click', this.onClickPurchase.bind(this));
    });
  }

  setCoinReturnButtonClickEvent() {
    const coinReturnButton = document.querySelector('#coin-return-button');
    coinReturnButton.addEventListener('click', this.onClickCoinReturn.bind(this));
  }

  onClickChargeButton(e) {
    e.preventDefault();
    const amountToAdd = Number(this.chargeInput.value);
    if (!isValidChargeAmount(amountToAdd)) return;
    this.charge += amountToAdd;
    setCharge(this.charge);
    this.view.updateChargeAmount(this.charge);
    this.clearInputValue();
  }

  onClickPurchase(e) {
    const { productName, productPrice, productQuantity } = this.getProductDataFromPurchaseButton(e.target);
    const productIndex = this.products.findIndex((product) => product.name === productName);
    if ( !isValidPurchase(productPrice, this.charge) ) return;
    this.charge -= productPrice;
    this.products[productIndex] = { ...this.products[productIndex], quantity: productQuantity - 1 };
    setCharge(this.charge);
    setProducts(this.products);
    this.updateViewOnPurchase();
  }

  getProductDataFromPurchaseButton(button) {
    const tableItem = button.parentNode.parentNode;
    const { productName } = tableItem.querySelector('.product-purchase-name').dataset;
    const { productPrice } = tableItem.querySelector('.product-purchase-price').dataset;
    const { productQuantity } = tableItem.querySelector('.product-purchase-quantity').dataset;
    return { productName, productPrice, productQuantity };
  }

  onClickCoinReturn() {
    const { amount, coinQuantity } = this.getAmountAndCoinQuantityToBeReturned();
    this.charge -= amount;
    this.vendingMachineCharge.amount -= amount;
    this.vendingMachineCharge.coinQuantity = coinQuantity.map((quantity, index) => this.vendingMachineCharge.coinQuantity[index] - quantity);
    setCharge(this.charge);
    setVendingMachineCharge(this.vendingMachineCharge);
    this.updateViewOnReturnCoin(coinQuantity);
  }

  updateViewOnPurchase() {
    this.view.updateChargeAmount(this.charge);
    this.view.updatePurchaseTable(this.products);
    this.setPurchaseButtonClickEvent();
  }

  updateViewOnReturnCoin(coinQuantity) {
    this.view.updateChargeAmount(this.charge);
    this.view.updateCoinReturnTable(coinQuantity);
  }

  clearInputValue() {
    this.chargeInput.value = '';
  }

  getAmountAndCoinQuantityToBeReturned() {
    if (this.charge >= this.vendingMachineCharge.amount) 
      return this.vendingMachineCharge;
    let leftCharge = this.charge;
    const coinQuantity = [0, 0, 0, 0];
    coinList.forEach((coin) => {
      coinQuantity[coinIndex(coin)] = this.getCoinQuantityToBeReturned(coin, leftCharge);
      leftCharge -= coin * coinQuantity[coinIndex(coin)];
    })
    return { amount: this.charge - leftCharge, coinQuantity };
  }

  getCoinQuantityToBeReturned(typeOfCoin, leftCharge) {
    const vendingMachineCoinQuantity = this.vendingMachineCharge.coinQuantity[coinIndex(typeOfCoin)];
    const maxOfCoinQuantityToBeReturned = Math.floor(leftCharge / typeOfCoin);
    if (maxOfCoinQuantityToBeReturned > vendingMachineCoinQuantity) return vendingMachineCoinQuantity;
    return maxOfCoinQuantityToBeReturned;
  }     

}
