import {
    CHARGE_TAB_ID as ID,
    CHARGE_STRING as STRING,
    ZERO,
    LOACL_STORAGE as LOCAL,
    CLICK,
} from "../storage/constant.js";
import { appendLocalStorage } from "../storage/localStorage.js";
import { appendTable } from "./Coin.js";
import { checkNumContainDivideTen } from "../storage/validation.js";

const { pickNumberInList } = MissionUtils.Random;
export default function ChargeContainer(coin) {
    const $input = document.getElementById(ID.CHARGE_INPUT);
    const $amount = document.getElementById(ID.CHARGE_AMOUNT);
    this.coin = coin;
    this.init = () => {
        setButtonListener();
    };

    const setButtonListener = () => {
        const $chargeButton = document.getElementById(ID.CHARGE_BUTTON);
        $chargeButton.addEventListener(CLICK, function (e) {
            e.preventDefault();
            const amount = getChargeInput();
            getCoin(amount);
        });
    };

    const getChargeInput = () => {
        const $inputVal = checkNumContainDivideTen($input.value);
        $amount.innerHTML += $inputVal;

        return $inputVal;
    };

    const getCoin = (amount) => {
        let numAmount = Number(amount);
        const arr = [
            Number(STRING.COIN_500),
            Number(STRING.COIN_100),
            Number(STRING.COIN_50),
            Number(STRING.COIN_10),
        ];
        while (numAmount > ZERO) {
            const nums = pickNumberInList(arr);
            const restAmount = numAmount - nums;
            if (restAmount >= ZERO) {
                numAmount = restAmount;
                this.coin.addCoinCount(nums);
            }
        }
        appendTable(this.coin, ID);
        this.coin.setTotal();
        appendLocalStorage(LOCAL.COIN_AMOUNT, this.coin);
    };

    this.init();
}
