import { $, paintTemplate, clearInputs, ID } from '../utils/dom.js';
import { vendingMachineManageMenuTemplate } from '../utils/templates.js';
import { ERROR_MSG, LS_KEY, COIN, CHARGE_INIT } from '../utils/constants.js';
import {
  load,
  isSmallerThanMinUnit,
  cannotBeDividedByMinUnit,
} from '../utils/controller.js';

export default class VendingMachineManage {
  constructor() {
    this.charges = CHARGE_INIT;
    this.init();
  }

  init = () => {
    paintTemplate(vendingMachineManageMenuTemplate);
    this.charges = load(LS_KEY.VENDING_MACHINE_MANAGE_CHARGES);

    this.paintHoldingAmount();
    this.paintLoadedCharges();

    $('form').addEventListener('submit', this.handleVendingMachineChargeSubmit);
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
      if (coinType === COIN.FIVE_HUNDRED)
        $(`#${ID.VENDING_MACHINE_COIN_500_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === COIN.A_HUNDRED)
        $(`#${ID.VENDING_MACHINE_COIN_100_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === COIN.FIFTY)
        $(`#${ID.VENDING_MACHINE_COIN_50_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === COIN.TEN)
        $(`#${ID.VENDING_MACHINE_COIN_10_QUANTITY}`).innerHTML = `${quantity}개`;
    });
  };

  handleVendingMachineChargeSubmit = (e) => {
    e.preventDefault();
    const $chargeInput = $(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`);
    const chargeInput = parseInt($chargeInput.value);

    const isValid = this.validateCharge(chargeInput);
    if (!isValid) {
      alert(ERROR_MSG.VENDING_MACHINE_MANAGE);
    }
    if (isValid) {
      this.saveCharge(chargeInput);
      this.paintHoldingAmount();
      this.paintLoadedCharges();
      clearInputs([$chargeInput]);
    }
  };

  validateCharge = (chargeInput) => {
    if (isSmallerThanMinUnit(chargeInput)) {
      return false;
    }
    if (cannotBeDividedByMinUnit(chargeInput)) {
      return false;
    }
    return true;
  };

  saveCharge = (chargeInput) => {
    const coinTypes = [COIN.FIVE_HUNDRED, COIN.A_HUNDRED, COIN.FIFTY, COIN.TEN];
    const randomCoinType = MissionUtils.Random.pickNumberInList(coinTypes);
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
    localStorage.setItem(
      LS_KEY.VENDING_MACHINE_MANAGE_CHARGES,
      JSON.stringify(this.charges)
    );
  };
}
