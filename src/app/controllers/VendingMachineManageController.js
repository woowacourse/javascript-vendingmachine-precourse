import { $ } from '../../lib/utils.js';
import { DOM, INPUTS_DEFAULT_VALUE } from '../constants.js';
import VendingMachineUtil from '../util.js';

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
      this.addCoins();
      this.$model.setVendingMachineChargeInputsValue(
        () => INPUTS_DEFAULT_VALUE.VENDING_MACHINE_CHARGE
      );
      this.$view.mainView.renderCoins(
        this.$model.getCoins(),
        this.$model.getVendingMachineChargeInputsValue()
      );
    } catch (error) {
      alert(error);
    }
  }

  addCoins() {
    const vendingMachineInputsValue = this.$model.getVendingMachineChargeInputsValue();
    const vendingMachineChargeInputValue = this.$model.getVendingMachineChargeInputValueByInputId(
      DOM.VENDING_MACHINE_CHARGE_INPUT
    );
    /** 캡슐화 완료 */
    if (
      VendingMachineUtil.isValidCharge(vendingMachineInputsValue, DOM.VENDING_MACHINE_CHARGE_INPUT)
    ) {
      const newCoins = VendingMachineUtil.getNewCoins(Number(vendingMachineChargeInputValue));
      this.$model.setCoins(
        VendingMachineUtil.combineCurrentCoinsAndNewCoins(this.$model.getCoins(), newCoins)
      );
    }
  }
}
export default VendingMachineManageController;
