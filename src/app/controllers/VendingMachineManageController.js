import { DATA_MODEL_KEYS, DOM } from '../../lib/constants.js';
import { $, isValidChargeAmount } from '../../lib/utils.js';
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
    this.executeAddChargeProcess();
  }

  executeAddChargeProcess() {
    const newChargeAmount = Number(
      this.$model.getVendingMachineChargeInputValueByInputId(DOM.VENDING_MACHINE_CHARGE_INPUT)
    );
    try {
      if (isValidChargeAmount(newChargeAmount)) {
        const newCoins = Coin.getRandomCoins(newChargeAmount);
        this.$model.addChargeAmount(newChargeAmount, DATA_MODEL_KEYS.VENDING_MACHINE_CHARGE);
        this.executeAddCoinsProcess(newCoins);
      }
    } catch (error) {
      alert(error);
    }
  }

  executeAddCoinsProcess(newCoins) {
    this.$model.addCoins(newCoins);
    this.$model.setVendingMachineChargeInputsValue(() =>
      defaultValueGenerators[DATA_MODEL_KEYS.VENDING_MACHINE_CHARGE_INPUTS_VALUE]()
    );
    this.$view.mainView.renderCoins(
      this.$model.getCoins(),
      this.$model.getVendingMachineChargeInputsValue(),
      this.$model.getVendingMachineChargeAmount()
    );
  }
}
export default VendingMachineManageController;
