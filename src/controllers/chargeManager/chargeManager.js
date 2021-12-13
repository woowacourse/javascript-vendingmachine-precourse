import { onClickMachineChargeButton } from "./eventHandlers.js";
import { showMoneyInMachine } from "../../views/chargeManager/show/showMoneyInMachine.js";
import { showCoinsInMachine } from "../../views/chargeManager/show/showCoinsInMachine.js";

class ChargeManager {
  constructor() {
    onClickMachineChargeButton();
    showMoneyInMachine();
    showCoinsInMachine();
  }
}

export default ChargeManager;
