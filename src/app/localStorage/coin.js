import STORAGE_KEY from '../asset/constants/STORAGE_KEY.js';
import { getNumber, getJsonItem, setJsonItem } from './index.js';

export const getChargeAmount = () => getNumber(STORAGE_KEY.chargeAmount);

export const setChargeAmount = (chargeAmount) =>
    localStorage.setItem(STORAGE_KEY.chargeAmount, chargeAmount);

export const getCoins = () => getJsonItem(STORAGE_KEY.coins);

export const setCoins = (coins) => setJsonItem(STORAGE_KEY.coins, coins);
