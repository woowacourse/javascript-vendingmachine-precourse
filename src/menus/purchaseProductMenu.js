import { vendingMachine } from "../components/vendingMachine.js";
import { checkInsertMoneyInput } from "../utils/validation.js";
import { renderMoney } from "../views/purchaseProductView.js";

const resetInput = () => {
  const $charge_input = document.getElementById("charge-input");
  $charge_input.value = "";
};

export const onClickInsertButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const money = form.querySelector("#charge-input").value;

  if (checkInsertMoneyInput(money)) {
    const resultMoney = vendingMachine.insertMoney(parseInt(money));
    renderMoney(resultMoney);
    resetInput();
  }
};
