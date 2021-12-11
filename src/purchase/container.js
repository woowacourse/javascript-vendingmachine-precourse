import {
    PURCHASE_TAB_ID as ID,
    LOACL_STORAGE as LOCAL,
    EMPTY,
} from "../storage/constant.js";
import { clearInput } from "../storage/createElement.js";
import { getLocalStorage, setLocalStorage } from "../storage/localStorage.js";
import { setTotalAmount, gridCalc } from "./calc.js";
import { Coin } from "../charge/Coin.js";
import { checkNumContainDivideTen } from "../storage/validation.js";
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
        const $returnButton = document.getElementById(ID.RETURN_BUTTON);
        $chargeButton.addEventListener("click", function (e) {
            e.preventDefault();
            const chargeVal = checkNumContainDivideTen($chargeInput.value);

            $chargeAmount.innerHTML += loadAmount + chargeVal;
            setLocalStorage(LOCAL.TOTAL_AMOUNT, loadAmount + chargeVal);
            clearInput($chargeInput);
        });

        $returnButton.addEventListener("click", function (e) {
            e.preventDefault();
            const loadCoin = getLocalStorage(LOCAL.COIN_AMOUNT);
            if (loadCoin !== EMPTY) {
                const curCoins = JSON.parse(loadCoin);
                const result = gridCalc($chargeAmount.value, curCoins[0]);
                showReturnCoin(result);
                // 반환한 개수만큼 localStorage에서 개수를 차감해줘야 함.
                returnLocalStorage(curCoins[0], result);
            }
        });
    };

    const showReturnCoin = (result) => {
        const $coin_500 = document.getElementById(ID.COIN_500);
        const $coin_100 = document.getElementById(ID.COIN_100);
        const $coin_50 = document.getElementById(ID.COIN_50);
        const $coin_10 = document.getElementById(ID.COIN_10);

        [$coin_500, $coin_100, $coin_50, $coin_10].forEach((element, idx) => {
            element.innerText = `${result[idx]}개`;
        });
    };

    const returnLocalStorage = (curCoins, result) => {
        const remainCoin = new Coin();
        remainCoin.coin_500 = curCoins.coin_500 - result[0];
        remainCoin.coin_100 = curCoins.coin_100 - result[1];
        remainCoin.coin_50 = curCoins.coin_50 - result[2];
        remainCoin.coin_10 = curCoins.coin_10 - result[3];
        remainCoin.setTotal();
        setLocalStorage(LOCAL.COIN_AMOUNT, JSON.stringify(remainCoin));
    };

    this.init();
}
