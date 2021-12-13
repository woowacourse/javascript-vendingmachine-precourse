import { getInputValueById } from "../../utils/inputValue.js";
import { isValidMoney } from "../common/checkMoneyInput.js";
import { addCoinsInMachine } from "./data/chargeMachineDataController.js";
import { showMoneyInMachine } from "../../views/chargeManager/show/showMoneyInMachine.js";
import { showCoinsInMachine } from "../../views/chargeManager/show/showCoinsInMachine.js";
import { ALERT_MSG } from "../../utils/constants.js";
import { resetChargeMachineInput } from "../../views/common/resetInput.js";

// 클릭 이벤트 실행할 함수
const processing = () => {
  const money = getInputValueById("vending-machine-charge-input");

  if (isValidMoney(money)) {
    addCoinsInMachine(parseInt(money, 10));
    showMoneyInMachine();
    showCoinsInMachine();
  } else {
    alert(ALERT_MSG.wrongChargeMoney);
  }
  resetChargeMachineInput();
};

const onClickMachineChargeButton = () => {
  const $machineChargeButton = document.getElementById(
    "vending-machine-charge-button",
  );

  $machineChargeButton.addEventListener("click", processing);
};

export { onClickMachineChargeButton };
