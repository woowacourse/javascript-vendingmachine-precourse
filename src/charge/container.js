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
import { Coin } from "./Coin.js";
const { pickNumberInList } = MissionUtils.Random;
export default function ChargeContainer() {
    const $input = document.getElementById(ID.CHARGE_INPUT);
    const $amount = document.getElementById(ID.CHARGE_AMOUNT);
    const coin = new Coin();
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
                coin.addCoinCount(nums);
            }
        }
        appendTable(coin);
        coin.setTotal();
        appendLocalStorage(LOCAL.COIN_AMOUNT, coin);
    };

    const appendTable = (coin) => {
        const $coin_500 = document.getElementById(ID.COIN_500);
        const $coin_100 = document.getElementById(ID.COIN_100);
        const $coin_50 = document.getElementById(ID.COIN_50);
        const $coin_10 = document.getElementById(ID.COIN_10);

        const loadCoin = getLocalStorage(LOCAL.COIN_AMOUNT);
        if (loadCoin !== EMPTY) {
            const curCoin = JSON.parse(loadCoin);
            coin.coin_500 += curCoin[0].coin_500;
            coin.coin_100 += curCoin[0].coin_100;
            coin.coin_50 += curCoin[0].coin_50;
            coin.coin_10 += curCoin[0].coin_10;
        }
        $coin_500.innerHTML = `${coin.coin_500}개`;
        $coin_100.innerHTML = `${coin.coin_100}개`;
        $coin_50.innerHTML = `${coin.coin_50}개`;
        $coin_10.innerHTML = `${coin.coin_10}개`;
    };

    this.init();
}
