import { $ } from '../dom/dom.js';
import checkValidChargeInput from './checkValidChargeInput.js';

export default function getUserChargeInput() {
  let chargeInput = false;
  if (checkValidChargeInput($('#charge-input').value)) {
    chargeInput = $('#charge-input').value;
  }
  return chargeInput;
}
