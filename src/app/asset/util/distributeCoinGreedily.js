import COIN from '../constants/COIN.js';

const distributeCoinGreedily = (amount, coinCnts) => {
    let inputAmount = amount;

    return COIN.map((coinVal, idx) => {
        const cnt = Math.min(Math.floor(inputAmount / coinVal), coinCnts[idx]);

        inputAmount -= coinVal * cnt;

        return cnt;
    });
};

export default distributeCoinGreedily;
