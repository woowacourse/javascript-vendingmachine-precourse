import {
    PURCHASE_TAB_ID as ID,
    LOACL_STORAGE as LOCAL,
    EMPTY,
} from "../storage/constant.js";
import { clearInput } from "../storage/createElement.js";
import { getLocalStorage, setLocalStorage } from "../storage/localStorage.js";
export default function PurchaseContainer() {
    const $chargeInput = document.getElementById(ID.CHARGE_INPUT);
    const $chargeAmount = document.getElementById(ID.CHARGE_AMOUNT);
    const loadAmount = getLocalStorage(LOCAL.TOTAL_AMOUNT);

    this.init = () => {
        setTotalAmount();
        setButtonListener();
    };

    const setButtonListener = () => {
        const $chargeButton = document.getElementById(ID.CHARGE_BUTTON);
        $chargeButton.addEventListener("click", function (e) {
            e.preventDefault();
            const chargeVal = $chargeInput.value;

            $chargeAmount.innerHTML += loadAmount + chargeVal;
            setLocalStorage(LOCAL.TOTAL_AMOUNT, loadAmount + chargeVal);
            clearInput($chargeInput);
        });
    };

    const setTotalAmount = () => {
        if (loadAmount !== EMPTY) {
            $chargeAmount.innerHTML += loadAmount;
        }
    };

    this.init();
}
