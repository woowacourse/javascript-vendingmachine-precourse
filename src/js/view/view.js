import { $ } from '../utils/querySelector.js';

export const showCurrentAmount = (targetId, currentAmount) => {
  $(targetId).innerHTML = currentAmount;
};
