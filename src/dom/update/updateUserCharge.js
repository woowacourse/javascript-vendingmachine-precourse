import { getChargeAmount } from '../domElement.js';
import { vendingMachine } from '../../index.js';

export const updateUserChargeAmount = () => {
  const chargeAmount = getChargeAmount();

  chargeAmount.innerHTML = vendingMachine.userAmount;
};
