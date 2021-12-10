import { COIN } from '../constants/index.js';

const calcCoinAmount = (coinCnts) =>
    coinCnts.reduce((m, coinCnt, idx) => m + COIN[idx] * coinCnt, 0);

export default calcCoinAmount;
