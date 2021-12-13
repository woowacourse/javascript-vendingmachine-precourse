import { vendingMachine } from '../index.js';
import { USER_CHARGE } from '../constants/key.js';

export const saveUserCharge = () =>
  localStorage.setItem(USER_CHARGE, vendingMachine.userAmount);

const loadUserCharge = () => {
  const userCharge = localStorage.getItem(USER_CHARGE);

  return userCharge ? Number(userCharge) : null;
};

export const initUserCharge = () => {
  const userCharge = loadUserCharge();

  if (!userCharge) {
    return;
  }

  vendingMachine.userAmount = userCharge;
};
