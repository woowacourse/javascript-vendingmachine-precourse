import { NUMBER } from "../constant/Constant.js";

function validatePrice(input) {
    return (input % NUMBER.MINIMUM_COIN_UNIT) === 0 && input >= NUMBER.MINIMUM_PRICE;
}

export default validatePrice;
