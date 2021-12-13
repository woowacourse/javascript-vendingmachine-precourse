import {
  CHARGE_ERR,
  CHARGE_RULES,
  PURCHASE_ELEMENT_ID,
} from '../constants/constants.js';

export default class PurchaseModel {
  constructor() {
    this.chargeInputEl = document.querySelector(
      `#${PURCHASE_ELEMENT_ID.chargeInput}`,
    );
    this.chargeButtonEl = document.querySelector(
      `#${PURCHASE_ELEMENT_ID.chargeButton}`,
    );
    this.chargeMoney = JSON.parse(localStorage.getItem('chargeMoney'));
  }

  getChargeInput() {
    return this.chargeInputEl.value;
  }

  resetChargeInput() {
    this.chargeInputEl.value = '';
  }

  getChargeMoneyStorage() {
    return this.chargeMoney;
  }

  updateChargeMoneyStorage() {
    this.chargeMoney = JSON.parse(localStorage.getItem('chargeMoney'));
  }

  setChargeMoneyStorage(newChargeMoney) {
    localStorage.setItem('chargeMoney', newChargeMoney);
    this.updateChargeMoneyStorage();
  }

  isValidChargeInput() {
    if (
      this.getChargeInput() >= CHARGE_RULES.minCharge &&
      this.getChargeInput() % CHARGE_RULES.measures === 0
    ) {
      return true;
    }
    alert(CHARGE_ERR);

    return false;
  }

  addChargeMoneyStorage() {
    const chargeMoney = parseInt(this.getChargeMoneyStorage(), 10);
    const chargeInput = parseInt(this.getChargeInput(), 10);
    if (chargeMoney) {
      localStorage.setItem('chargeMoney', chargeMoney + chargeInput);
    } else {
      localStorage.setItem('chargeMoney', chargeInput);
    }
    this.updateChargeMoneyStorage();
  }
}
