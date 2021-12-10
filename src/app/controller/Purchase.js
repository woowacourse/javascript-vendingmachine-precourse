import checkInputAmount from '../asset/validation/checkInputAmount.js';
import { getInputAmount, setInputAmount } from '../localStorage/inputAmount.js';
import PurchaseTap from '../view/PurchaseTap.js';

export default class Purchase {
    constructor($skeleton) {
        this.purchaseTap = new PurchaseTap($skeleton);
    }

    init() {
        this.purchaseTap.init();
        this.triggerPutAmountEvent();
    }

    triggerPutAmountEvent() {
        this.purchaseTap.getInputButton().addEventListener('click', () => {
            const inputAmount = this.purchaseTap.getInputAmount();

            if (checkInputAmount(inputAmount)) {
                this.putAmount(Number(inputAmount));
            }
        });
    }

    putAmount(inputAmount) {
        setInputAmount(getInputAmount() + inputAmount);
    }
}
