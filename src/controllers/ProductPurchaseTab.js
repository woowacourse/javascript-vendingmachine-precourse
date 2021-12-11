import ProductPurchaseTabView from '../views/ProductPurchaseTabView.js';
import { getAmountAndCoinQuantityToBeReturned } from '../utils/index.js';
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
    this.storage.addCharge(amountToAdd);
    this.view.updateOnCharge(this.storage.charge);
  }

  onClickPurchase(e) {
    const product = this.getProductDataFromPurchaseButton(e.target);
    if (!isValidPurchase(product.price, this.storage.charge)) return;
    this.storage.subtractCharge(product.price);
    this.storage.updateProducts({ ...product, quantity: product.quantity - 1 })
    this.updateOnPurchase();
  }

  onClickCoinReturn() {
    const moneyToBeReturned = getAmountAndCoinQuantityToBeReturned(this.storage.charge, this.storage.vendingMachineCharge);
    this.storage.subtractCharge(moneyToBeReturned.amount);
    this.storage.subtractVendingMachineCharge(moneyToBeReturned);
    this.view.updateOnCoinReturn(this.storage.charge, moneyToBeReturned.coinQuantity);
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
}
