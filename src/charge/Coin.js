import { getLocalStorage } from "../storage/localStorage.js";
import { EMPTY, LOACL_STORAGE as LOCAL } from "../storage/constant.js";

export const Coin = function () {
    this.coin_500 = 0;
    this.coin_100 = 0;
    this.coin_50 = 0;
    this.coin_10 = 0;

    this.total = 0;

    this.addCoinCount = (value) => {
        switch (value) {
            case 500:
                return (this.coin_500 += 1);
            case 100:
                return (this.coin_100 += 1);
            case 50:
                return (this.coin_50 += 1);
            case 10:
                return (this.coin_10 += 1);
        }
    };

    this.setTotal = () => {
        this.total =
            this.coin_500 * 500 +
            this.coin_100 * 100 +
            this.coin_50 * 50 +
            this.coin_10 * 10;
    };
};

export const appendTable = (coin, ID) => {
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
