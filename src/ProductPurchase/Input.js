import { $ } from '../common/elements.js';

import {
  checkAmountInputValidation,
  onInvalidInputSubmit,
} from './CheckValidation.js';

function onMoneyInputClick(event) {
  event.preventDefault();
  const inputValidation = checkAmountInputValidation();

  if (!inputValidation) onInvalidInputSubmit();
}

export default function setMoneyInputClick() {
  $('charge-button').addEventListener('click', onMoneyInputClick);
}
