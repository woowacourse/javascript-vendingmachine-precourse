import { ALERT_MSG } from "../../utils/constants.js";
import { showCoinsInMachine } from "../../views/chargeManager/showCoinsInMachine.js";
import { showMoneyInMachine } from "../../views/chargeManager/showMoneyInMachine.js";
import { getInputValueById } from "../common/getInputValue.js";
import { addCoinsInMachine } from "./chargeMachineDataController.js";
import { isValidMoney } from "./checkMoneyInput.js";

const processing = e => {
  e.preventDefault();
  const money = getInputValueById("vending-machine-charge-input");

  if (isValidMoney(money)) {
    addCoinsInMachine(parseInt(money, 10));
    showMoneyInMachine();
    showCoinsInMachine();
  } else {
    const { wrongChargeMoney } = ALERT_MSG;
    alert(wrongChargeMoney);
  }
};

const onClickMachineChargeButton = () => {
  const $machineChargeButton = document.getElementById(
    "vending-machine-charge-button",
  );

  $machineChargeButton.addEventListener("click", processing);
};

export { onClickMachineChargeButton };
