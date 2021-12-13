import { ERROR_MESSAGE } from "../constants.js";

const isNumber = (input) => {
    if(isNaN(input)){
        alert(ERROR_MESSAGE.NAN);
        return false;
    }
    return true;
}

const isNegative = (input) => {
    if(input >= 0){
        return false;
    }
    alert(ERROR_MESSAGE.NEGATIVE);
    return true;
}

const isBelowTen = (input) => {
    if(input < 10){
        alert(ERROR_MESSAGE.BELOW_TEN);
        return false;
    }
    return true;
}

const isTenUnit = (input) => {
    if(input % 10 != 0){
        alert(ERROR_MESSAGE.TEN_UNIT);
        return false;
    }
    return true;
}

export { isNumber, isNegative, isBelowTen, isTenUnit };