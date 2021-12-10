import { COINS, STORAGE_KEY } from '../asset/constants/index.js';
import { getJsonItem, setJsonItem } from './common.js';
import { calcCoinAmount } from '../asset/util/index.js';

const defaultCoinVal = COINS.map(() => 0);

export const getCoinCnts = () => getJsonItem(STORAGE_KEY.coins, defaultCoinVal);

export const setCoinCnts = (coins) => setJsonItem(STORAGE_KEY.coins, coins);

export const getChargeAmount = () => calcCoinAmount(getCoinCnts());
