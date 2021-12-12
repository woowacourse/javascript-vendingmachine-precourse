import { ZERO, NOT_EXIST, DIVISOR_NUMBER} from "../utils/constants.js";

export default class ProductPurchaseCheck {
    constructor(userCharge) {
        this.userCharge = userCharge;
    }

    checkEmpty() {
        return this.userCharge !== "" && this.userCharge.indexOf(' ') === NOT_EXIST;
    }

    checkAmount() {
        return this.userCharge > ZERO && this.userCharge % DIVISOR_NUMBER === ZERO;
    }

    checkInteger() {
        return this.userCharge.indexOf('.') === NOT_EXIST;
    }

    checkAll() {
        return this.checkEmpty() && this.checkAmount() && this.checkInteger();
    }
}