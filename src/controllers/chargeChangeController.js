import { chargeChange } from "../components/chargeChange.js";
import { ID, IS_RENDERED_CHARGE_TAP } from "../assets/constants/public.js";
import { CHARGE_TAP } from "../assets/constants/chargeTap.js";
import { saveCoinsToLocalStorage } from "../assets/utils/utils.js";
import { checkChargeChangeInput } from "../assets/validations/chargeTapValidation.js";
import {
  renderChangeAmount,
  renderChargeChangeMenuView,
  renderCoins,
} from "../views/chargeChangeView.js";

const resetInput = input => {
  input.value = "";
};

const setIsRender = () => {
  localStorage[IS_RENDERED_CHARGE_TAP] = "TRUE";
};

const charge = chargeInput => {
  chargeChange.chargeCoin(parseInt(chargeInput.value));
  renderChangeAmount(chargeChange.getTotalMoney());
  renderCoins(chargeChange);
  saveCoinsToLocalStorage(chargeChange);
  setIsRender();
  resetInput(chargeInput);
};

export const onClickChargeChangeTab = e => {
  event.preventDefault();
  chargeChange.loadFromLocalStorage();
  renderChargeChangeMenuView(chargeChange);
};

export const onClickChargeButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const chargeInput = form.querySelector(`#${CHARGE_TAP.FORM.INPUT[ID]}`);

  if (checkChargeChangeInput(chargeInput.value)) {
    charge(chargeInput);
  }
};
