import { vendingMachine } from "../components/vendingMachine.js";
import { saveToLocalStorage } from "../utils/utils.js";
import { checkChargeChangeInput } from "../utils/validation.js";
import { renderChangeAmount, renderCoins } from "../views/chargeChangeView.js";

const resetInput = form => {
  const input = form.querySelector("#vending-machine-charge-input");
  input.value = "";
};

const setIsRender = () => {
  localStorage["isRenderChargeTap"] = "TRUE";
};

export const onClickChargeButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const chargeInput = form.querySelector("#vending-machine-charge-input").value;

  if (checkChargeChangeInput(chargeInput)) {
    vendingMachine.chargeCoin(parseInt(chargeInput));
    renderChangeAmount(vendingMachine.getTotalMoney());
    renderCoins(vendingMachine);
    saveToLocalStorage(vendingMachine);
    resetInput(form);
    setIsRender();
  }
};
