import { AMOUNT, BUTTON } from '../common/constants.js';
import {
  createButton,
  createForm,
  createNumberInput,
} from '../common/CreateElement.js';

function createCoinChargeInput() {
  const [id, placeholder] = ['vending-machine-charge-input', AMOUNT.TO_HAVE];
  const coinChargeInput = createNumberInput(id, placeholder);

  return coinChargeInput;
}

function createCoinChargeButton() {
  const [id, innerText] = ['vending-machine-charge-button', BUTTON.CHARGE];
  const coinChargeButton = createButton(id, innerText);

  return coinChargeButton;
}

export default function createCoinChargeForm() {
  const coinChargeForm = createForm();
  const coinChargeInput = createCoinChargeInput();
  const coinChargeButton = createCoinChargeButton();
  coinChargeForm.append(coinChargeInput, coinChargeButton);

  return coinChargeForm;
}
