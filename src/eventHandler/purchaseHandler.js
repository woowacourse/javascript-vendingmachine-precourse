import $ from '../util/$.js';
import {
  PURCHASE_BUTTON_ID,
  PURCHASE_INPUT_ID,
  PURCHASE_AMOUNT_ID,
} from '../constant/constant.js';

function onMoneyInput(event, vendingMachine) {
  event.preventDefault();
  const input = $(`#${PURCHASE_INPUT_ID}`).value;
  const $moneySpan = $(`#${PURCHASE_AMOUNT_ID}`);

  vendingMachine.setCurrentMoney(input);
  $moneySpan.textContent = vendingMachine.money;
}

export default function purchaseHandler(vendingMachine) {
  const $moneyInput = $(`#${PURCHASE_BUTTON_ID}`);

  $moneyInput.addEventListener('click', (event) => onMoneyInput(event, vendingMachine));
}
