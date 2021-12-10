import COIN from '../asset/constants/COIN.js';
import STORAGE_KEY from '../asset/constants/STORAGE_KEY.js';
import { getJsonItem, setJsonItem } from './index.js';
import calcCoinAmount from '../asset/util/calcCoinAmount.js';

const defaultCoinVal = COIN.map(() => 0);

export const getCoins = () => getJsonItem(STORAGE_KEY.coins, defaultCoinVal);

export const setCoins = (coins) => setJsonItem(STORAGE_KEY.coins, coins);

export const getChargeAmount = () => calcCoinAmount(getCoins());
