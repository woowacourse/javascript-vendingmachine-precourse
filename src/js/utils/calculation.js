import { STANDARD } from './constants.js';

export const calculationCurrentAmount = (storedChargeCoins) => {
  let currentAmount = STANDARD.CURRENT_MONEY;
  // eslint-disable-next-line no-restricted-syntax
  for (const unit in storedChargeCoins) {
    currentAmount += storedChargeCoins[unit] * unit;
  }
  return currentAmount;
};
