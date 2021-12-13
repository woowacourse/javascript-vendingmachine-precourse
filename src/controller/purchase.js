import { $, handleStorage, validation, onKeyUpNumericEvent } from './utils.js';
import { KEY, SELECTOR } from '../model/constants.js';
import { productPurchaseTableRow, productPurchaseTableHeader } from '../model/template.js';

export default class Purchase {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
    this.initProductStatusTable();
    this.initChargeDom();
  }

  addEventListeners() {
    $(SELECTOR.chargeButton).addEventListener('click', () => this.chargeMoney());
    $(SELECTOR.returnButton).addEventListener('click', () => this.returnMoney());
    $(SELECTOR.chargeInput).addEventListener('keyup', () =>
      onKeyUpNumericEvent($(SELECTOR.chargeInput)),
    );
  }

  initAllPurchaseButtonEvent() {
    const allButtons = document.querySelectorAll(`.${SELECTOR.purchaseButton}`);
    allButtons.forEach(button =>
      button.addEventListener('click', () =>
        this.purchaseProduct(button.parentElement.parentElement),
      ),
    );
  }

  initProductStatusTable() {
    const table = document.querySelector('tbody');
    const allProducts = handleStorage.getItemOrArray(KEY.product);
    this.view.clearTable(table);
    this.view.addTableHeader(table, productPurchaseTableHeader());
    allProducts.forEach(product => this.view.addTableRow(table, productPurchaseTableRow(product)));
    this.initAllPurchaseButtonEvent();
  }

  initPurchaseDom() {
    const charge = handleStorage.getItemOrNull(KEY.charge);
    if (charge || charge === 0) {
      this.view.setInnerHTML($(SELECTOR.chargeAmount), charge);
    }
    this.initProductStatusTable();
  }

  calculateProducts(selectProduct, products) {
    selectProduct.quantity -= 1;
    if (selectProduct.quantity === 0) {
      products = products.filter(product => product.name !== selectProduct.name);
    }
    handleStorage.setItem(KEY.product, products);
  }

  calculateCharge(selectProduct, charge) {
    charge -= selectProduct.price;
    handleStorage.setItem(KEY.charge, charge);
  }

  purchaseProduct(item) {
    const charge = handleStorage.getItemOrNull(KEY.charge);
    const products = handleStorage.getItemOrArray(KEY.product);
    const selectProduct = products.find(e => e.name === item.childNodes[1].dataset.productName);
    if (validation.isEnoughCoin(charge, selectProduct.price)) {
      this.calculateProducts(selectProduct, products);
      this.calculateCharge(selectProduct, charge);
      this.initPurchaseDom();
    }
  }

  initChargeDom() {
    const charge = handleStorage.getItemOrNull(KEY.charge);
    this.view.clearInput($(SELECTOR.chargeInput));
    if (charge || charge === 0) {
      this.view.setInnerHTML($(SELECTOR.chargeAmount), charge);
    }
  }

  isChargeInputValid(chargeInput) {
    return validation.isInputNumberValid(chargeInput) && validation.isMultipleOf10(chargeInput);
  }

  chargeMoney() {
    const chargeInput = $(SELECTOR.chargeInput);
    let charge = handleStorage.getItemOrNull(KEY.charge);
    if (this.isChargeInputValid(chargeInput)) {
      if (charge || charge === 0) {
        charge += parseInt(chargeInput.value);
      } else if (charge === null) {
        charge = parseInt(chargeInput.value);
      }
      handleStorage.setItem(KEY.charge, charge);
      this.initChargeDom();
    }
  }

  calculateByQuantity(div, x, chargeInput, minimalCoin) {
    if (div <= x.quantity && chargeInput >= x.coin) {
      chargeInput -= x.coin * div;
      x.quantity -= div;
      minimalCoin.quantity = div;
    } else if (div > x.quantity && chargeInput >= x.coin) {
      chargeInput -= x.coin * x.quantity;
      minimalCoin.quantity = x.quantity;
      x.quantity = 0;
    }
    handleStorage.setItem(KEY.charge, chargeInput);
  }

  findMinimalNum(x) {
    const minimalCoin = { coin: x.coin, quantity: 0 };
    const chargeInput = handleStorage.getItemOrNull(KEY.charge);
    const div = Math.trunc(chargeInput / x.coin);
    this.calculateByQuantity(div, x, chargeInput, minimalCoin);

    return minimalCoin;
  }

  makeMinimumCoin() {
    const vendingMachine = handleStorage.getItemOrNull(KEY.vending);
    const minimumCoin = vendingMachine.coins.map(x => this.findMinimalNum(x));
    minimumCoin.forEach(minimum => (vendingMachine.change -= minimum.coin * minimum.quantity));
    handleStorage.setItem(KEY.vending, vendingMachine);

    return minimumCoin;
  }

  returnMoney() {
    const minimumCoinArray = this.makeMinimumCoin();
    this.view.initReturnTable(minimumCoinArray);
    this.initChargeDom();
  }
}
