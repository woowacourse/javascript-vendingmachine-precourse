import { onClickMachineChargeButton } from "./eventHandlers.js";
import { showMoneyInMachine } from "../../views/chargeManager/showMoneyInMachine.js";
import { showCoinsInMachine } from "../../views/chargeManager/showCoinsInMachine.js";

class ChargeManager {
  constructor() {
    onClickMachineChargeButton();
    showMoneyInMachine();
    showCoinsInMachine();
  }
}

export default ChargeManager;
