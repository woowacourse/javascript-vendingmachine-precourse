import { vendingMachine } from '../index.js';
import { VENDING_MACHINE_CHARGES } from '../constants/key.js';

export const saveCharges = () => {
  localStorage.setItem(
    VENDING_MACHINE_CHARGES,
    JSON.stringify({
      amount: vendingMachine.amount,
      coins: vendingMachine.coins,
    })
  );
};

export const loadCharges = () => {
  return JSON.parse(localStorage.getItem(VENDING_MACHINE_CHARGES));
};

export const initCharges = () => {
  const charges = loadCharges();

  if (!charges) {
    return;
  }

  vendingMachine.amount = charges.amount;
  vendingMachine.coins = charges.coins;
};
