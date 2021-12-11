import { coinTypeList } from '../constants/index.js';
import { ERROR_MESSAGE } from '../constants/resources.js';

const { pickNumberInList } = MissionUtils.Random;

export const domSelector = (selector, target = document) => target.querySelector(selector);
export const domsSelector = (selector, target = document) => new Array(...target.querySelectorAll(selector));
export const setErrorStatus = (type) => {
    if (ERROR_MESSAGE[type] === undefined) throw 'Error: 정의되지 않은 에러상태입니다.';
    alert(ERROR_MESSAGE[type]);
};
export const getRandomCoint = (money) => {
    const coinList = { 500: 0, 100: 0, 50: 0, 10: 0 };

    while (money) {
        const coin = pickNumberInList(coinTypeList);
        if (money - coin < 0) continue;

        money -= coin;
        coinList[coin]++;
    }

    return coinList;
};
export const getExchangeCoin = (money, coinList) => {
    const exchangeCoin = { 500: 0, 100: 0, 50: 0, 10: 0 };

    for (const coin of coinTypeList) {
        for (let idx = 0; idx < coinList[coin]; idx++) {
            if (money - coin < 0) break;
            money -= coin;
            exchangeCoin[coin]++;
        }
    }

    return exchangeCoin;
};
