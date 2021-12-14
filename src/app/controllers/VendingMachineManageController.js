import { DATA_MODEL_KEYS, DOM } from '../../lib/constants.js';
import { $, isValidCharge } from '../../lib/utils.js';
import Coin from '../../modules/coin.js';
import { defaultValueGenerators } from '../model/index.js';

class VendingMachineManageController {
  constructor({ view, model }) {
    this.$view = view;
    this.$model = model;
  }

  registerEventHandler() {
    $(DOM.VENDING_MACHINE_CHARGE_FORM).addEventListener(
      'input',
      this.onInputVendingMachineChargeForm.bind(this)
    );
    $(DOM.VENDING_MACHINE_CHARGE_FORM).addEventListener(
      'submit',
      this.onSubmitVendingMachineChargeForm.bind(this)
    );
  }

  onInputVendingMachineChargeForm(e) {
    const {
      target: { value, id },
    } = e;

    this.$model.setVendingMachineChargeInputsValue((prev) => ({ ...prev, [`${id}`]: value }));
  }

  onSubmitVendingMachineChargeForm(e) {
    e.preventDefault();
    try {
      this.submitSuccess();
    } catch (error) {
      alert(error);
    }
  }

  submitSuccess() {
    this.addCoins();
    const inputValue = Number(
      this.$model.getVendingMachineChargeInputValueByInputId(DOM.VENDING_MACHINE_CHARGE_INPUT)
    );
    const newVendingMachineCharge = this.combineCurrentVendingMachineChargeAndNewCharge(inputValue);
    this.$model.setVendingMachineChargeAmount(newVendingMachineCharge);
    this.$model.setVendingMachineChargeInputsValue(() =>
      defaultValueGenerators[DATA_MODEL_KEYS.VENDING_MACHINE_CHARGE_INPUTS_VALUE]()
    );
    this.$view.mainView.renderCoins(
      this.$model.getCoins(),
      this.$model.getVendingMachineChargeInputsValue(),
      this.$model.getVendingMachineChargeAmount()
    );
  }

  addCoins() {
    const vendingMachineInputsValue = this.$model.getVendingMachineChargeInputsValue();
    const vendingMachineChargeInputValue = this.$model.getVendingMachineChargeInputValueByInputId(
      DOM.VENDING_MACHINE_CHARGE_INPUT
    );
    /** 캡슐화 완료 */
    if (isValidCharge(vendingMachineInputsValue, DOM.VENDING_MACHINE_CHARGE_INPUT)) {
      const newCoins = this.getNewCoins(Number(vendingMachineChargeInputValue));
      this.$model.setCoins(this.combineCurrentCoinsAndNewCoins(this.$model.getCoins(), newCoins));
    }
  }

  combineCurrentCoinsAndNewCoins(currentCoins, newCoins) {
    const combinedCoins = {};
    Object.keys(currentCoins).forEach((key) => {
      combinedCoins[key] = currentCoins[key] + newCoins[key];
    });

    return combinedCoins;
  }

  combineCurrentVendingMachineChargeAndNewCharge(newCharge) {
    const currentCharge = Number(this.$model.getVendingMachineChargeAmount());
    return currentCharge + newCharge;
  }

  /** coin 모듈로 뺀다? */
  getNewCoins(charge) {
    return Coin.getRandomCoins(charge);
  }
}
export default VendingMachineManageController;
