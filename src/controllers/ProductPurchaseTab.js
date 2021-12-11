import ProductPurchaseTabView from '../views/ProductPurchaseTabView.js';
import { coinIndex } from '../utils/index.js';
import { coinList } from '../constants/index.js';
import { isValidChargeAmount, isValidPurchase } from '../utils/validations.js';

export default class ProductPurchaseTab {
  constructor(storage) {
    this.view = new ProductPurchaseTabView();
    this.storage = storage;
  }

  initialize() {
    this.view.initialRender(this.storage.charge, this.storage.products);
    this.setButtonClickEvent();
  }

  setButtonClickEvent() {
    const chargeButton = document.querySelector('#charge-button');
    const coinReturnButton = document.querySelector('#coin-return-button');
    chargeButton.addEventListener('click', this.onClickCharge.bind(this));
    coinReturnButton.addEventListener('click', this.onClickCoinReturn.bind(this));
    this.setPurchaseButtonClickEvent();
  }

  setPurchaseButtonClickEvent() {
    const purchaseButtons = document.querySelectorAll('.purchase-button');
    purchaseButtons.forEach((button) => {
      button.addEventListener('click', this.onClickPurchase.bind(this));
    });
  }

  onClickCharge(e) {
    e.preventDefault();
    const chargeInput = document.querySelector('#charge-input');
    const amountToAdd = Number(chargeInput.value);
    if (!isValidChargeAmount(amountToAdd)) return;
    this.storage.setCharge(this.storage.charge + amountToAdd);
    this.view.updateOnCharge(this.storage.charge);
  }

  onClickPurchase(e) {
    const product = this.getProductDataFromPurchaseButton(e.target);
    if (!isValidPurchase(product.price, this.storage.charge)) return;
    this.storage.setCharge(this.storage.charge - product.price);
    this.storage.updateProducts({ ...product, quantity: product.quantity - 1 })
    this.updateOnPurchase();
  }

  onClickCoinReturn() {
    // storage 관련 수정 필요
    const { amount, coinQuantity } = this.getAmountAndCoinQuantityToBeReturned();
    this.storage.vendingMachineCharge.amount -= amount;
    this.storage.vendingMachineCharge.coinQuantity = coinQuantity.map((quantity, index) => this.storage.vendingMachineCharge.coinQuantity[index] - quantity);
    this.storage.setCharge(this.storage.charge - amount);
    this.storage.setVendingMachineCharge(this.storage.vendingMachineCharge);
    this.view.updateOnCoinReturn(this.storage.charge, coinQuantity);
  }

  getProductDataFromPurchaseButton(button) {
    const tableItem = button.parentNode.parentNode;
    const { productName: name } = tableItem.querySelector('.product-purchase-name').dataset;
    const { productPrice: price } = tableItem.querySelector('.product-purchase-price').dataset;
    const { productQuantity: quantity } = tableItem.querySelector('.product-purchase-quantity').dataset;
    return { name, price, quantity };
  }

  updateOnPurchase() {
    this.view.updateOnPurchase(this.storage.charge, this.storage.products)
    this.setPurchaseButtonClickEvent();
  }

  getAmountAndCoinQuantityToBeReturned() {
    if (this.storage.charge >= this.storage.vendingMachineCharge.amount) 
      return this.storage.vendingMachineCharge;
    let leftCharge = this.storage.charge;
    const coinQuantity = [0, 0, 0, 0];
    coinList.forEach((coin) => {
      coinQuantity[coinIndex(coin)] = this.getCoinQuantityToBeReturned(coin, leftCharge);
      leftCharge -= coin * coinQuantity[coinIndex(coin)];
    })
    return { amount: this.storage.charge - leftCharge, coinQuantity };
  }

  getCoinQuantityToBeReturned(typeOfCoin, leftCharge) {
    const vendingMachineCoinQuantity = this.storage.vendingMachineCharge.coinQuantity[coinIndex(typeOfCoin)];
    const maxOfCoinQuantityToBeReturned = Math.floor(leftCharge / typeOfCoin);
    if (maxOfCoinQuantityToBeReturned > vendingMachineCoinQuantity) return vendingMachineCoinQuantity;
    return maxOfCoinQuantityToBeReturned;
  }     

}
