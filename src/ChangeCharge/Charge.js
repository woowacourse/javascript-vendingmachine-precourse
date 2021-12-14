/* eslint-disable comma-dangle */

import { $ } from '../common/elements.js';

import {
  checkAmountInputValidation,
  onInvalidInputSubmit,
} from './CheckValidation.js';
import { createCoinTable, setCoinToLocalStorage } from './CreateTable.js';

export function addAmountHaveToLocalStorage(input) {
  let amountHave = 0;

  if (localStorage.getItem('보유 금액')) {
    amountHave = localStorage.getItem('보유 금액');
  }

  amountHave = amountHave * 1 + input * 1;
  localStorage.setItem('보유 금액', amountHave);
}

export function setAmountHave() {
  const amountHaveDiv = $('amount-have-div');
  const amountHave = localStorage.getItem('보유 금액');
  amountHaveDiv.lastChild.textContent = amountHave;
}

function onValidInputSubmit() {
  const vendingMachineChargeInput = $('vending-machine-charge-input').value;
  addAmountHaveToLocalStorage(vendingMachineChargeInput);
  setAmountHave();
  createCoinTable();
}

function onCoinChargeClick() {
  const inputValidation = checkAmountInputValidation();

  if (!inputValidation) {
    onInvalidInputSubmit();
  } else {
    onValidInputSubmit();
  }
}

export function setCoinChargeClick() {
  $('vending-machine-charge-button').addEventListener(
    'click',
    onCoinChargeClick
  );
}
