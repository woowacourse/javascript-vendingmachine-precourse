import ProductPurchaseTabView from '../views/ProductPurchaseTabView.js';
import { getAmountAndCoinQuantityToBeReturned } from '../utils/index.js';
import { isValidChargeAmount, isValidPurchase } from '../utils/validations.js';
import { CLASS, ID } from '../constants/selectors.js';

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
    const chargeButton = document.getElementById(ID.PRODUCT_PURCHASE.CHARGE_BUTTON);
    const coinReturnButton = document.getElementById(ID.COIN_RETURN.BUTTON);
    chargeButton.addEventListener('click', this.onClickCharge.bind(this));
    coinReturnButton.addEventListener('click', this.onClickCoinReturn.bind(this));
    this.setPurchaseButtonClickEvent();
  }

  setPurchaseButtonClickEvent() {
    const purchaseButtons = document.querySelectorAll(`.${CLASS.PRODUCT_PURCHASE.BUTTON}`);
    purchaseButtons.forEach((button) => {
      button.addEventListener('click', this.onClickPurchase.bind(this));
    });
  }

  onClickCharge(e) {
    e.preventDefault();
    const chargeInput = document.getElementById(ID.PRODUCT_PURCHASE.CHARGE_INPUT);
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
    const { productName: name } = tableItem.querySelector(`.${CLASS.PRODUCT_PURCHASE.NAME}`).dataset;
    const { productPrice: price } = tableItem.querySelector(`.${CLASS.PRODUCT_PURCHASE.PRICE}`).dataset;
    const { productQuantity: quantity } = tableItem.querySelector(`.${CLASS.PRODUCT_PURCHASE.QUANTITY}`).dataset;
    return { name, price, quantity };
  }

  updateOnPurchase() {
    this.view.updateOnPurchase(this.storage.charge, this.storage.products)
    this.setPurchaseButtonClickEvent();
  }
}
