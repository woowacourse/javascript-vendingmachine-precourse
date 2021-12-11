import {
    CHARGE_TAB_ID as ID,
    CHARGE_STRING as STRING,
    ZERO,
    LOACL_STORAGE as LOCAL,
    EMPTY,
} from "../storage/constant.js";
import {
    appendLocalStorage,
    getLocalStorage,
} from "../storage/localStorage.js";
import { Coin, appendTable } from "./Coin.js";
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
        $chargeButton.addEventListener("click", function (e) {
            e.preventDefault();
            const amount = getChargeInput();
            getCoin(amount);
        });
    };

    const getChargeInput = () => {
        // 여기서 validation을 해야 함.
        const $inputVal = $input.value;
        $amount.innerHTML += $inputVal;

        return $inputVal;
    };

    const getCoin = (amount) => {
        // amount 만큼 추가된 동전의 값들이 더해진다.
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
        appendTable(this.coin);
        this.coin.setTotal();
        appendLocalStorage(LOCAL.COIN_AMOUNT, this.coin);
    };

    this.init();
}
