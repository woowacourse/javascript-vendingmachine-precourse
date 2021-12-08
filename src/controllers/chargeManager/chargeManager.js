import { showCoinsInMachine } from "../../views/chargeManager/showCoinsInMachine.js";
import { showMoneyInMachine } from "../../views/chargeManager/showMoneyInMachine.js";
import { onClickMachineChargeButton } from "./eventHandlers.js";

class ChargeManager {
  constructor() {
    onClickMachineChargeButton();
    showMoneyInMachine();
    showCoinsInMachine();
  }
}

export default ChargeManager;
