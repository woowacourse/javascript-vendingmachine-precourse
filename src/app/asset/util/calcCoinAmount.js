import { COINS } from '../constants/index.js';

const calcCoinAmount = (coinCnts) =>
    coinCnts.reduce((m, coinCnt, idx) => m + COINS[idx] * coinCnt, 0);

export default calcCoinAmount;
