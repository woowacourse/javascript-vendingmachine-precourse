import {
  addAmountHaveToLocalStorage,
  setAmountHave,
} from '../ChangeCharge/Charge.js';
import { $ } from '../common/elements.js';

import {
  checkAmountInputValidation,
  onInvalidInputSubmit,
} from './CheckValidation.js';

function addAmountInputToLocalStorage(input) {
  let amountInput = 0;

  if (localStorage.getItem('투입한 금액')) {
    amountInput = localStorage.getItem('투입한 금액');
  }

  amountInput = amountInput * 1 + input * 1;
  localStorage.setItem('투입한 금액', amountInput);
}

function setAmountInput() {
  const amountInputDiv = $('amount-input-div');
  const amountInput = localStorage.getItem('투입한 금액');
  amountInputDiv.lastChild.textContent = amountInput;
}

function onValidInputSubmit() {
  const inputInput = $('charge-input').value;
  addAmountInputToLocalStorage(inputInput);
  setAmountInput();
  addAmountHaveToLocalStorage(inputInput);
  setAmountHave();
}

function onMoneyInputClick(event) {
  event.preventDefault();
  const inputValidation = checkAmountInputValidation();

  if (!inputValidation) {
    onInvalidInputSubmit();
  } else {
    onValidInputSubmit();
  }
}

export default function setMoneyInputClick() {
  $('charge-button').addEventListener('click', onMoneyInputClick);
}
