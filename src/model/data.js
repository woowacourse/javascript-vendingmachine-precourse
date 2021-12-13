import { STRING } from '../constants/constants.js';

export const defaultProducts = () => {
  return [];
};

export const defaultAddTabInput = () => {
  return { name: STRING.EMPTY, price: STRING.EMPTY, quantity: STRING.EMPTY };
};
