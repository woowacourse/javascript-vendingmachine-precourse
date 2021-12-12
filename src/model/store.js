import ReservedChange from './reservedChange.js';
import ReturnedChange from './returnedChange.js';
import UserInputMoney from './userInputMoney.js';

export const store = {
  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
};

export const items = store.getLocalStorage('items') ?? [];
export const reservedChange = store.getLocalStorage('reservedChange') ?? new ReservedChange();
export const userInputMoney = store.getLocalStorage('userInputMoney') ?? new UserInputMoney();
export const returnedChange = store.getLocalStorage('returnedChange') ?? new ReturnedChange();
