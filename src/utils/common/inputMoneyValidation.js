import { ERROR_MSG } from '../../constants/constants.js';

export const inputMoneyValidation = money => {
  const validation = {
    isError: false,
    inValidText: '',
  };

  if (!money) {
    validation.isError = true;
    validation.inValidText = ERROR_MSG.INPUT_MONEY;
    return validation;
  }

  if (money < 100 || money % 10) {
    validation.isError = true;
    validation.inValidText = ERROR_MSG.VALIDATE_MONEY;
    return validation;
  }

  return validation;
};
