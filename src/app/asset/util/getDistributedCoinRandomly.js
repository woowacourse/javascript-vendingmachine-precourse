import { COINS } from '../constants/index.js';

const coinToIdx = COINS.reduce((m, coin, idx) => {
    const ret = m;
    ret[coin] = idx;
    return m;
}, {});

const getPickCoinList = (amount) => COINS.filter((coin) => amount >= coin);

const getDistributedCoinRandomly = (amount) => {
    let chargeAmount = amount;
    const ret = Array(COINS.length).fill(0);

    while (chargeAmount >= COINS[COINS.length - 1]) {
        const coin = MissionUtils.Random.pickNumberInList(getPickCoinList(chargeAmount));
        ret[coinToIdx[coin]] += 1;
        chargeAmount -= coin;
    }

    return ret;
};

export default getDistributedCoinRandomly;
