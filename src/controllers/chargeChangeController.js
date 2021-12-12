import { chargeChange } from "../components/chargeChange.js";
import { ID, IS_RENDERED_CHARGE_TAP } from "../assets/constants/public.js";
import { CHARGE_TAP } from "../assets/constants/chargeTap.js";
import { saveCoinsToLocalStorage } from "../assets/utils/utils.js";
import { checkChargeChangeInput } from "../assets/validations/validation.js";
import {
  renderChangeAmount,
  renderChargeChangeMenuView,
  renderCoins,
} from "../views/chargeChangeView.js";

const resetInput = form => {
  const input = form.querySelector(`#${CHARGE_TAP.CHARGE_INPUT[ID]}`);
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
    `#${CHARGE_TAP.CHARGE_INPUT[ID]}`
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
