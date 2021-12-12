import Change from './change.js';
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
export const change = store.getLocalStorage('change') ?? new Change();
export const userInputMoney = store.getLocalStorage('userInputMoney') ?? new UserInputMoney();
