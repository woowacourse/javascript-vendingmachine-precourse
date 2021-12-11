import { coinTypeList } from '../constants/index.js';
import { ERROR_MESSAGE } from '../constants/resources.js';

const { pickNumberInList } = MissionUtils.Random;

export const domSelector = (selector, target = document) =>
    target.querySelector(selector);
export const domsSelector = (selector, target = document) =>
    target.querySelectorAll(selector);
export const setErrorStatus = (type) => {
    if (ERROR_MESSAGE[type] === undefined)
        throw 'Error: 정의되지 않은 에러상태입니다.';
    alert(ERROR_MESSAGE[type]);
};
export const getRandomCoint = (money) => {
    const coinList = {
        coin500: 0,
        coin100: 0,
        coin50: 0,
        coin10: 0,
    };

    while (money) {
        const coin = pickNumberInList(coinTypeList);
        if (money - coin < 0) continue;

        money -= coin;
        coinList[`coin${coin}`]++;
    }

    return coinList;
};
