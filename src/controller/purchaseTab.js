import { $, validation, onKeyUpNumericEvent } from './utils.js';
import { SELECTOR } from '../model/constants.js';
import { productPurchaseTableRow, productPurchaseTableHeader } from '../model/template.js';

export default class PurchaseTab {
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
    const allProducts = this.model.getProducts();
    this.view.clearTable(table);
    this.view.addTableHeader(table, productPurchaseTableHeader);
    allProducts.forEach(product => this.view.addTableRow(table, productPurchaseTableRow(product)));
    this.initAllPurchaseButtonEvent();
  }

  initPurchaseDom() {
    const charge = this.model.getCharge();
    if (charge || charge === 0) {
      this.view.setInnerHTML($(SELECTOR.chargeAmount), charge);
    }
    this.initProductStatusTable();
  }

  calculateProduct(selectProduct, products) {
    selectProduct.quantity -= 1;
    if (selectProduct.quantity === 0) {
      products = products.filter(product => product.name !== selectProduct.name);
    }
    this.model.setProducts(products);
  }

  calculateCharge(selectProduct, charge) {
    charge -= selectProduct.price;
    this.model.setCharge(charge);
  }

  purchaseProduct(item) {
    const charge = this.model.getCharge();
    const products = this.model.getProducts();
    const selectProduct = products.find(e => e.name === item.childNodes[1].dataset.productName);
    if (validation.isEnoughCoin(charge, selectProduct.price)) {
      this.calculateProduct(selectProduct, products);
      this.calculateCharge(selectProduct, charge);
      this.initPurchaseDom();
    }
  }

  initChargeDom() {
    const charge = this.model.getCharge();
    this.view.clearInput($(SELECTOR.chargeInput));
    if (charge || charge === 0) {
      this.view.setInnerHTML($(SELECTOR.chargeAmount), charge);
    }
  }

  isChargeInputValid(chargeInput) {
    return validation.isInputNumberValid(chargeInput) && validation.isMultipleOf10(chargeInput);
  }

  chargeByExistence(charge, chargeInput) {
    if (charge || charge === 0) {
      charge += parseInt(chargeInput.value);
    } else if (charge === null) {
      charge = parseInt(chargeInput.value);
    }
    this.model.setCharge(charge);
  }

  chargeMoney() {
    const chargeInput = $(SELECTOR.chargeInput);
    const charge = this.model.getCharge();
    if (this.isChargeInputValid(chargeInput)) {
      this.chargeByExistence(charge, chargeInput);
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
    this.model.setCharge(chargeInput);
  }

  findMinimalNum(x) {
    const minimalCoin = { coin: x.coin, quantity: 0 };
    const chargeInput = this.model.getCharge();
    const div = Math.trunc(chargeInput / x.coin);
    this.calculateByQuantity(div, x, chargeInput, minimalCoin);

    return minimalCoin;
  }

  makeMinimumCoin() {
    const vendingMachine = this.model.getVendingMachine();
    const minimumCoin = vendingMachine.coins.map(x => this.findMinimalNum(x));
    minimumCoin.forEach(minimum => (vendingMachine.change -= minimum.coin * minimum.quantity));
    this.model.setVendingMachine(vendingMachine);

    return minimumCoin;
  }

  returnMoney() {
    const minimumCoinArray = this.makeMinimumCoin();
    this.view.initReturnTable(minimumCoinArray);
    this.initChargeDom();
  }
}
