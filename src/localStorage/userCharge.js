import { vendingMachine } from '../index.js';
import { updateUserChargeAmount } from '../dom/control/updateUserChargeAmount.js';

export const saveUserCharge = () => {
  localStorage.setItem('userCharge', vendingMachine.userAmount);
};

export const loadUserCharge = () => {
  const userCharge = localStorage.getItem('userCharge');

  return userCharge ? Number(userCharge) : null;
};

export const initUserCharge = () => {
  const userCharge = loadUserCharge();

  if (!userCharge) {
    return;
  }

  vendingMachine.userAmount = userCharge;
  updateUserChargeAmount();
};
