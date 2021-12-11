import $ from '../util/$.js';
import {
  CHARGE_BUTTON_ID,
  CHARGE_INPUT_ID,
  CHARGE_COIN_TALBE_ID,
  CHARGE_AMOUNT_ID,
} from '../constant/constant.js';

function renderChargeResult(coins) {
  const $amount = $(`#${CHARGE_AMOUNT_ID}`);

  $amount.textContent = coins.getSum();
  coins.render(CHARGE_COIN_TALBE_ID);
}

function onCharge(event, vendingMachine) {
  event.preventDefault();
  const money = $(`#${CHARGE_INPUT_ID}`).value;

  const coins = vendingMachine.charge(money);
  if (coins) {
    renderChargeResult(coins);
  }
}

export default function chargeHandler(vendingMachine) {
  const $chargeButton = $(`#${CHARGE_BUTTON_ID}`);

  $chargeButton.addEventListener('click', (event) => onCharge(event, vendingMachine));
}
