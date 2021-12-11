import { $ } from '../dom/dom.js';
import getTotalVendingCoin from '../modules/getTotalVendingCoin.js';

export default function renderTotalCoinElement() {
  let totalCoin = getTotalVendingCoin();
  $('#vending-machine-charge-amount').innerText = `${totalCoin}원`;
}
