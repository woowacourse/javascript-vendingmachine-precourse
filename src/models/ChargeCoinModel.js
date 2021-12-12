import { COINS_INIT_OBJECT } from '../utils/constants.js';

export default {
  coins: initCoins(),
};

const initCoins = () => {
  return JSON.parse(localStorage.getItem('coins'))
    ? JSON.parse(localStorage.getItem('coins'))
    : COINS_INIT_OBJECT;
};
