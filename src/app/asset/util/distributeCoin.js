import COIN from '../constants/COIN.js';

const coinToIdx = {
    500: 0,
    100: 1,
    50: 2,
    10: 3,
};

const getPickCoinList = (amount) => COIN.filter((coin) => amount >= coin);

const distributeCoin = (amount) => {
    let chargeAmount = amount;
    const ret = Array(COIN.length).fill(0);

    while (chargeAmount >= COIN[COIN.length - 1]) {
        const coin = MissionUtils.Random.pickNumberInList(getPickCoinList(chargeAmount));
        ret[coinToIdx[coin]] += 1;
        chargeAmount -= coin;
    }

    return ret;
};

export default distributeCoin;
