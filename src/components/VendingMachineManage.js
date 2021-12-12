import { $, ID } from '../utils/dom.js';
import { vendingMachineManageMenuTemplate } from '../utils/templates.js';
import { RULES, ERROR_MSG, LS_KEY } from '../utils/constants.js';

const LS_KEY_CHARGES = LS_KEY.VENDING_MACHINE_MANAGE_CHARGES;

export default class VendingMachineManage {
  constructor() {
    this.charges = [
      { coinType: 500, quantity: 0 },
      { coinType: 100, quantity: 0 },
      { coinType: 50, quantity: 0 },
      { coinType: 10, quantity: 0 },
    ];
    this.init();
  }

  init = () => {
    this.paintTemplate();
    this.loadCharges();

    this.paintHoldingAmount();
    this.paintLoadedCharges();

    $('form').addEventListener('submit', this.handleVendingMachineChargeSubmit);
  };

  paintTemplate = () => {
    $(`#${ID.PAGE_CONTENT}`).innerHTML = vendingMachineManageMenuTemplate();
  };

  loadCharges = () => {
    const loadedCharges = localStorage.getItem(LS_KEY_CHARGES);
    if (!loadedCharges) {
      return;
    }
    const parsedCharges = JSON.parse(loadedCharges);
    this.charges = parsedCharges;
    return;
  };

  paintHoldingAmount = () => {
    let holdingAmount = 0;
    this.charges.map(({ coinType, quantity }) => {
      holdingAmount += coinType * quantity;
    });
    $(`#${ID.VENDING_MACHINE_CHARGE_AMOUNT}`).innerHTML = `${holdingAmount}원`;
  };

  paintLoadedCharges = () => {
    this.charges.map(({ coinType, quantity }) => {
      if (coinType === 500)
        $(`#${ID.VENDING_MACHINE_COIN_500_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === 100)
        $(`#${ID.VENDING_MACHINE_COIN_100_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === 50)
        $(`#${ID.VENDING_MACHINE_COIN_50_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === 10)
        $(`#${ID.VENDING_MACHINE_COIN_10_QUANTITY}`).innerHTML = `${quantity}개`;
    });
  };

  handleVendingMachineChargeSubmit = (e) => {
    e.preventDefault();
    const chargeInput = parseInt($(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`).value);

    const isValid = this.validateCharge(chargeInput);
    if (!isValid) {
      alert(ERROR_MSG.VENDING_MACHINE_MANAGE);
    }
    if (isValid) {
      this.saveCharge(chargeInput);
      this.paintHoldingAmount();
      this.paintLoadedCharges();
      this.clearInputs();
    }
  };

  validateCharge = (chargeInput) => {
    if (chargeInput < RULES.MIN_PRICE_UNIT) {
      return false;
    }
    if (chargeInput % RULES.MIN_PRICE_UNIT) {
      return false;
    }
    return true;
  };

  saveCharge = (chargeInput) => {
    // do the logic
    const coinTypes = [500, 100, 50, 10];
    const randomCoinType = MissionUtils.Random.pickNumberInList(coinTypes);
    console.log('randomCoinType is ' + randomCoinType);
    for (let i = coinTypes.indexOf(randomCoinType); i < coinTypes.length; i++) {
      if (chargeInput <= 0) {
        break;
      }
      let currentCount = 0;
      currentCount += parseInt(chargeInput / coinTypes[i]);
      chargeInput %= coinTypes[i];
      this.updateCharges(coinTypes[i], currentCount);
    }
  };

  updateCharges = (coinType, quantity) => {
    this.charges.map((obj) => {
      if (obj.coinType === coinType) {
        obj.quantity += quantity;
      }
    });
    localStorage.setItem(LS_KEY_CHARGES, JSON.stringify(this.charges));
  };

  clearInputs = () => {
    $(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`).value = '';
  };
}
