import { DOM, NUMBER, ERROR_MESSAGE } from '../utils/constant.js';

export default class VendingMachineCharge {
  constructor(render) {
    this.render = render;
    this.$vendingMachineChargeInput = document.querySelector(DOM.$VENDING_MACHINE_CHARGE_INPUT);
  }

  isBlank = ($element) => {
    if ($element.value.length < NUMBER.BLANK_CHECK_LENGTH) {
      this.render.alertMessage(ERROR_MESSAGE.PRODUCT_BLANK($element.placeholder));
      this.render.inputFocus($element);

      return true;
    }

    return false;
  };

  isPositiveInteger = ($element) => {
    const productNumber = Number($element.value);
    if (!Number.isInteger(productNumber) || productNumber <= NUMBER.ZERO) {
      this.render.alertMessage(ERROR_MESSAGE.PRODUCT_POSITIVE_INTEGER);
      this.render.inputFocus($element);

      return false;
    }

    return true;
  };

  isUnitOfTen = () => {
    if (Number(this.$vendingMachineChargeInput.value) % NUMBER.UNIT_CHECK_TEN !== NUMBER.ZERO) {
      this.render.alertMessage(ERROR_MESSAGE.UNIT_OF_TEN(this.$vendingMachineChargeInput.placeholder));
      this.render.inputFocus(this.$vendingMachineChargeInput);

      return false;
    }

    return true;
  };

  isValidInputs = () =>
    !this.isBlank(this.$vendingMachineChargeInput) &&
    this.isPositiveInteger(this.$vendingMachineChargeInput) &&
    this.isUnitOfTen();
}
