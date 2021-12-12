import { vendingMachine } from "../components/vendingMachine.js";
import {
  ID,
  IS_RENDERED_CHARGE_TAP,
  PURCHASE_TAP,
} from "../utils/constants.js";
import { saveToLocalStorage } from "../utils/utils.js";
import { checkChargeChangeInput } from "../utils/validation.js";
import { renderChangeAmount, renderCoins } from "../views/chargeChangeView.js";

const resetInput = form => {
  const input = form.querySelector(`#${PURCHASE_TAP.chargeInput[1]}`);
  input.value = "";
};

const setIsRender = () => {
  localStorage[IS_RENDERED_CHARGE_TAP] = "TRUE";
};

export const onClickChargeButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const chargeInput = form.querySelector(
    `#${PURCHASE_TAP.chargeInput[ID]}`
  ).value;

  if (checkChargeChangeInput(chargeInput)) {
    vendingMachine.chargeCoin(parseInt(chargeInput));
    renderChangeAmount(vendingMachine.getTotalMoney());
    renderCoins(vendingMachine);
    saveToLocalStorage(vendingMachine);
    resetInput(form);
    setIsRender();
  }
};
