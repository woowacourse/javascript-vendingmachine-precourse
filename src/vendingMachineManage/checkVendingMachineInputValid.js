import { checkValidBlank, checkInputNumberValid } from '../checkValid/checkInputValid.js';
import { ERROR_MESSAGE } from '../util/constant.js';

//잔돈 입력값 유효성 검사
export function checkVendingMachineChargeInputValid() {
    const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input');
    if (!checkValidBlank($vendingMachineChargeInput)) {
        alert(ERROR_MESSAGE.BLANK_ERROR);
        return false;
    }
    else if (!checkInputNumberValid($vendingMachineChargeInput)) {
        alert(ERROR_MESSAGE.VENDING_MACHINE_CHARGE_INPUT_NUMBER_ERROR);
        return false;
    }
    return true;
}