import { chargeChange } from "../components/chargeChange.js";
import { ID, IS_RENDERED_CHARGE_TAP, CHARGE_TAP } from "../utils/constants.js";
import { saveCoinsToLocalStorage } from "../utils/utils.js";
import { checkChargeChangeInput } from "../utils/validation.js";
import {
  renderChangeAmount,
  renderChargeChangeMenuView,
  renderCoins,
} from "../views/chargeChangeView.js";

const resetInput = form => {
  const input = form.querySelector(`#${CHARGE_TAP.chargeInput[ID]}`);
  input.value = "";
};

const setIsRender = () => {
  localStorage[IS_RENDERED_CHARGE_TAP] = "TRUE";
};

export const onClickChargeChangeTab = e => {
  event.preventDefault();
  chargeChange.loadFromLocalStorage();
  renderChargeChangeMenuView(chargeChange);
};

export const onClickChargeButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const chargeInput = form.querySelector(
    `#${CHARGE_TAP.chargeInput[ID]}`
  ).value;

  if (checkChargeChangeInput(chargeInput)) {
    chargeChange.chargeCoin(parseInt(chargeInput));
    renderChangeAmount(chargeChange.getTotalMoney());
    renderCoins(chargeChange);
    saveCoinsToLocalStorage(chargeChange);
    setIsRender();
    resetInput(form);
  }
};
