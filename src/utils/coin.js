import {COIN_VALUE} from '../constants.js';

export const generateTemplateCoins = () => {
  const template = {};
  for (const key in COIN_VALUE) {
    template[key] = 0;
  }

  return template;
};

export const generateInverted = () => {
  const inverted = {};
  for (const key in COIN_VALUE) {
    inverted[COIN_VALUE[key]] = key;
  }

  return inverted;
};

// COIN_VALUE 에서 각 key의 value 값만 배열로 반환
export const generateOnlyValues = () => {
  const coinValues = [];
  for (const key in COIN_VALUE) {
    coinValues.push(COIN_VALUE[key]);
  }

  return coinValues;
};

export const getTotal = (coins) => {
  let total = 0;
  for (const key in COIN_VALUE) {
    total += coins[key] * COIN_VALUE[key];
  }

  return total;
};
