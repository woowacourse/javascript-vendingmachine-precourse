import { DONE } from '../constants/constants.js';

export const errorAlert = (resultCode) => {
  if (Object.values(DONE).includes(resultCode) === true) return false;
  alert(resultCode.description);
  return true;
};
