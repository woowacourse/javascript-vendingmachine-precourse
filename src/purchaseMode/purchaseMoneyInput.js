import { $ } from '../dom.js';

export default function PurchaseMoneyInput(money) {
  let totalMoney = parseInt(JSON.parse(localStorage.getItem('pushCoin')).money) + parseInt(money);
  localStorage.setItem('pushCoin', JSON.stringify({ "money": totalMoney }));
  $('#charge-amount').innerText = `투입한 금액: ${totalMoney}원`;
}