import { STRING, COIN_UNIT } from '../constants/constants.js';
import NUMBER from '../constants/number.js';
import Coin from './coin.js';

export const defaultProducts = () => {
  return [];
};

export const defaultAddTabInput = () => {
  return { name: STRING.EMPTY, price: STRING.EMPTY, quantity: STRING.EMPTY };
};

export const defaultCoins = () => {
  return COIN_UNIT.map((unit) => new Coin(unit, NUMBER.ZERO));
};
