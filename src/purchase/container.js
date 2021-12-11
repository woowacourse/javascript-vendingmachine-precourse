import {
    PURCHASE_TAB_ID as ID,
    LOACL_STORAGE as LOCAL,
    EMPTY,
} from "../storage/constant.js";
import { clearInput } from "../storage/createElement.js";
import { getLocalStorage, setLocalStorage } from "../storage/localStorage.js";
import { setTotalAmount } from "./calc.js";

export default function PurchaseContainer() {
    const $chargeInput = document.getElementById(ID.CHARGE_INPUT);
    const $chargeAmount = document.getElementById(ID.CHARGE_AMOUNT);
    const loadAmount = getLocalStorage(LOCAL.TOTAL_AMOUNT);

    this.init = () => {
        setTotalAmount(loadAmount, $chargeAmount);
        setButtonListener();
    };

    const setButtonListener = () => {
        const $chargeButton = document.getElementById(ID.CHARGE_BUTTON);
        $chargeButton.addEventListener("click", function (e) {
            e.preventDefault();
            // 여기서 유효성 검사 한번 해야 함.
            const chargeVal = $chargeInput.value;

            $chargeAmount.innerHTML += loadAmount + chargeVal;
            setLocalStorage(LOCAL.TOTAL_AMOUNT, loadAmount + chargeVal);
            clearInput($chargeInput);
        });
    };

    this.init();
}
