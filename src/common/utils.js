import { COIN_TYPE } from '../constants/index.js';

const { pickNumberInList } = MissionUtils.Random;

export const $ = (selector, target = document) => target.querySelector(selector);
export const $all = (selector, target = document) => new Array(...target.querySelectorAll(selector));

export const getUID = (function () {
    let id = 0;
    return function () {
        return id++;
    };
})();

export const findCoinIndex = (coin) => COIN_TYPE.findIndex((type) => type === coin);

export const getRandomCoin = (_money) => {
    const coinCounts = COIN_TYPE.map(() => 0);
    let money = _money;

    while (money) {
        const coin = pickNumberInList(COIN_TYPE);
        if (money - coin < 0) continue;

        money -= coin;
        coinCounts[findCoinIndex(coin)]++;
    }

    return coinCounts;
};

export const getExchangeCoin = (_money, coinCounts) => {
    let money = _money;

    return coinCounts.map((cnt, type) => {
        const coin = COIN_TYPE[type];
        const use = Math.min(cnt, parseInt(money / coin));

        money -= COIN_TYPE[type] * use;

        return use;
    });
};
