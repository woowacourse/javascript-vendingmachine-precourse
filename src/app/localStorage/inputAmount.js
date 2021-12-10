import { STORAGE_KEY } from '../asset/constants/index.js';
import { getNumber } from './common.js';

export const getInputAmount = () => getNumber(STORAGE_KEY.inputAmount);

export const setInputAmount = (inputAmount) =>
    localStorage.setItem(STORAGE_KEY.inputAmount, inputAmount);
