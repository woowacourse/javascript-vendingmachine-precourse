/* eslint-disable comma-dangle */

import { $ } from '../common/elements.js';

import {
  checkAmountInputValidation,
  onInvalidInputSubmit,
} from './CheckValidation.js';

function onCoinChargeClick(event) {
  event.preventDefault();
  const inputValidation = checkAmountInputValidation();

  if (!inputValidation) onInvalidInputSubmit();
}

export default function setCoinChargeClick() {
  $('vending-machine-charge-button').addEventListener(
    'click',
    onCoinChargeClick
  );
}
