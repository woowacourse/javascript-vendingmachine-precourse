import $ from '../util/$.js';
import {
  PURCHASE_BUTTON_ID,
  PURCHASE_INPUT_ID,
} from '../constant/constant.js';

function onMoneyInput(event, vendingMachine) {
  event.preventDefault();
  const input = $(`#${PURCHASE_INPUT_ID}`).value;

  vendingMachine.setCurrentMoney(input);
}

export default function purchaseHandler(vendingMachine) {
  const $moneyInput = $(`#${PURCHASE_BUTTON_ID}`);

  $moneyInput.addEventListener('click', (event) => onMoneyInput(event, vendingMachine));
}
