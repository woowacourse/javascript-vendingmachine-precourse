import { COINS } from '../constants/index.js';

const coinToIdx = {
    500: 0,
    100: 1,
    50: 2,
    10: 3,
};

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
