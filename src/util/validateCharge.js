import { NUMBER } from "../constant/Constant.js";

function validateCharge(input) {
    return (input % NUMBER.MINIMUM_COIN_UNIT) === 0 && input >= NUMBER.MINIMUM_CHARGE;
}

export default validateCharge;
