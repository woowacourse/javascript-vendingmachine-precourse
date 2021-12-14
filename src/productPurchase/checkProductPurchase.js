import { checkValidBlank, checkInputNumberValid } from '../checkValid/checkInputValid.js';
import { ERROR_MESSAGE } from '../util/constant.js';

//입력창 예외처리
export function checkChargeInputValid($chargeInput) {
    //공백체크
    if (!checkValidBlank($chargeInput)) {
        alert(ERROR_MESSAGE.BLANK_ERROR);
        return false;
    }
    //0보다 큰 정수인지 확인
    else if (!checkInputNumberValid($chargeInput)) {
        alert(ERROR_MESSAGE.CHARGE_INPUT_ERROR);
        return false;
    }
    return true;
}