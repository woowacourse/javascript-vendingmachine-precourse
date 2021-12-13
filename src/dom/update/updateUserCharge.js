import { getChargeAmount } from '../domElement.js';
import { vendingMachine } from '../../index.js';

const updateUserChargeAmount = () => {
  const chargeAmount = getChargeAmount();

  chargeAmount.innerHTML = vendingMachine.userAmount;
};

export default updateUserChargeAmount;
