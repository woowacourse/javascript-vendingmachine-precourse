import { coinList } from '../constants/index.js';

export const coinIndex = (coinToFind) => coinList.findIndex((coin) => coin === coinToFind);
