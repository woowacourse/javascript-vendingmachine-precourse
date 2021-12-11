import $ from '../util/$.js';
import {
  CHARGE_BUTTON_ID,
  CHARGE_INPUT_ID,
} from '../constant/constant.js';

function onCharge(event, vendingMachine) {
  event.preventDefault();
  const money = $(`#${CHARGE_INPUT_ID}`).value;

  vendingMachine.charge(money);
}

export default function chargeHandler(vendingMachine) {
  const $chargeButton = $(`#${CHARGE_BUTTON_ID}`);

  $chargeButton.addEventListener('click', (event) => onCharge(event, vendingMachine));
}
