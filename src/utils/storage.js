import { STRING } from '../constants/constants.js';
import Coin from '../model/coin.js';

export const setDataOnStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadDataFromStorage = (key) => {
  const loadedData = JSON.parse(localStorage.getItem(key));

  if (key === STRING.COINS && loadedData) {
    return loadedData.map(({ unit, amount }) => new Coin(unit, amount));
  }
  return loadedData;
};

export const setDataOnSessionStorage = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const loadDataFromSessionStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};
