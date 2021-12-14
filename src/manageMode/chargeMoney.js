import { $ } from '../dom.js';

export default function ChargeMoney(money) {
  $('#vending-machine-charge-amount').innerText = `보유 금액: ${money}원`;
}