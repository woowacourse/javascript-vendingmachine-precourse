import { vendingMachine } from '../index.js';
import { updateVendingMachineCharge } from '../dom/control/updateVendingMachineChargeTable.js';

export const saveCharges = () => {
  localStorage.setItem(
    'vendingMachineCharges',
    JSON.stringify({
      amount: vendingMachine.amount,
      coins: vendingMachine.coins,
    })
  );
};

export const loadCharges = () => {
  return JSON.parse(localStorage.getItem('vendingMachineCharges'));
};

export const initCharges = () => {
  const charges = loadCharges();

  if (!charges) {
    return;
  }

  vendingMachine.amount = charges.amount;
  vendingMachine.coins = charges.coins;
  updateVendingMachineCharge();
};
