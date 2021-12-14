import { checkValidBlank, checkInputNumberValid } from '../checkValid/checkInputValid.js';
import { ERROR_MESSAGE } from '../util/constant.js';

export function checkChargeInputValid($chargeInput) {
    if (!checkValidBlank($chargeInput)) {
        alert(ERROR_MESSAGE.BLANK_ERROR);
        return false;
    }
    else if (!checkInputNumberValid($chargeInput)) {
        alert(ERROR_MESSAGE.CHARGE_INPUT_ERROR);
        return false;
    }
    return true;
}
