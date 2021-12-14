import { USER } from '../common/constants/constants.js';
import {
  getCurrentSum,
  updateSum,
} from '../controller/product-purchase/print-to-screen.js';

export const saveUserChargedMoneyToStorage = (moneyChargeInputValue) => {
  let prevChargedAmount = getCurrentSum();

  if (prevChargedAmount === null) {
    prevChargedAmount = 0;
  }

  const newChargedAmount = prevChargedAmount + moneyChargeInputValue;
  updateSum(newChargedAmount);
};
