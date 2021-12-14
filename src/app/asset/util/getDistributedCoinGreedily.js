import { COINS } from '../constants/index.js';

const getDistributedCoinGreedily = (amount, coinCnts) => {
    let inputAmount = amount;

    return COINS.map((coin, idx) => {
        const cnt = Math.min(Math.floor(inputAmount / coin), coinCnts[idx]);

        inputAmount -= coin * cnt;

        return cnt;
    });
};

export default getDistributedCoinGreedily;