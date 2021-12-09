import STORAGE_KEY from '../asset/constants/STORAGE_KEY.js';
import COIN from '../asset/constants/COIN.js';
import { getJsonItem, setJsonItem } from './index.js';

export const getCoins = () => getJsonItem(STORAGE_KEY.coins);

export const setCoins = (coins) => setJsonItem(STORAGE_KEY.coins, coins);

export const getChargeAmount = () =>
    getCoins().reduce((m, coinCnt, idx) => m + COIN[idx] * coinCnt, 0);
