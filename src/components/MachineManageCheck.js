import { ZERO, NOT_EXIST, MIN_PRODUCT_PRICE, MIN_PRODUCT_QUANTITY, DIVISOR_NUMBER} from "../utils/constants.js";

export default class MachineManageCheck {
    constructor(charge) {
        this.charge = charge;
    }

    checkEmpty() {
        return this.charge !== "" && this.charge.indexOf(' ') === NOT_EXIST;
    }

    checkAmount() {
        return this.charge > ZERO && this.charge % DIVISOR_NUMBER === ZERO;
    }

    checkInteger() {
        return this.charge.indexOf('.') === NOT_EXIST;
    }

    checkAll() {
        return this.checkEmpty() && this.checkAmount() && this.checkInteger();
    }
}