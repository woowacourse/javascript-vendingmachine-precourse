import { AMOUNT, BUTTON } from '../common/constants.js';
import {
  createButton,
  createForm,
  createNumberInput,
} from '../common/CreateElement.js';

function createMoneyInputInput() {
  const [id, placeholder] = ['charge-input', AMOUNT.TO_INPUT];
  const moneyInputInput = createNumberInput(id, placeholder);

  return moneyInputInput;
}

function createMoneyInputButton() {
  const [id, innerText] = ['charge-button', BUTTON.INPUT];
  const moneyInputButton = createButton(id, innerText);

  return moneyInputButton;
}

export default function createMoneyInputForm() {
  const moneyInputForm = createForm();
  const moneyInputInput = createMoneyInputInput();
  const moneyInputButton = createMoneyInputButton();
  moneyInputForm.append(moneyInputInput, moneyInputButton);

  return moneyInputForm;
}
