import { $, validation, onKeyUpNumericEvent } from './utils.js';
import { SELECTOR, COIN_ARRAY } from '../model/constants.js';

export default class VendingTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
    this.view.initVendingTable(this.model.getVendingMachine());
    this.initChargeDom();
  }

  addEventListeners() {
    $(SELECTOR.vendingChargeButton).addEventListener('click', () => this.chargeVending());
    $(SELECTOR.vendingChargeInput).addEventListener('keyup', () =>
      onKeyUpNumericEvent($(SELECTOR.vendingChargeInput)),
    );
  }

  makeRandomCoinQuantity(inputValue) {
    const amountArray = COIN_ARRAY.map(x => x * 0);
    let totalPrice = 0;
    while (inputValue !== totalPrice) {
      const coin = MissionUtils.Random.pickNumberInList(COIN_ARRAY);
      if (totalPrice + coin <= inputValue) {
        totalPrice += coin;
        amountArray[COIN_ARRAY.indexOf(coin)] += 1;
      }
    }

    return amountArray;
  }

  initChargeDom() {
    const vendingMachine = this.model.getVendingMachine();
    this.view.clearInput($(SELECTOR.vendingChargeInput));
    if (vendingMachine) {
      this.view.setInnerHTML($(SELECTOR.vendingChargeAmount), vendingMachine.change);
    }
  }

  isChargeInputValid(chargeInput) {
    return validation.isInputNumberValid(chargeInput) && validation.isMultipleOf10(chargeInput);
  }

  setVendingMachineByRandomCoin(chargeInputValue, randomCoinQuantity) {
    let vendingMachine = this.model.getVendingMachine();
    if (vendingMachine) {
      vendingMachine.change += chargeInputValue;
    } else if (vendingMachine === null) {
      vendingMachine = this.model.makeVendingMachine(chargeInputValue);
    }
    randomCoinQuantity.forEach((v, i) => (vendingMachine.coins[i].quantity += v));
    this.model.setVendingMachine(vendingMachine);
  }

  chargeVending() {
    const chargeInput = $(SELECTOR.vendingChargeInput);
    if (this.isChargeInputValid(chargeInput)) {
      const chargeInputValue = parseInt(chargeInput.value);
      const randomCoinQuantity = this.makeRandomCoinQuantity(chargeInputValue);
      this.setVendingMachineByRandomCoin(chargeInputValue, randomCoinQuantity);
      this.initChargeDom();
      this.view.initVendingTable(this.model.getVendingMachine());
    }
  }
}
