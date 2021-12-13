import { $ } from '../dom/dom.js';
import getTotalVendingCoin from '../modules/getTotalVendingCoin.js';

function createChargeCoinElement(totalCoin) {
  return `
  <h2> 자판기 동전 충전하기 </h2>
  <div>
    <input id="vending-machine-charge-input" placeholder="자판기가 보유할 금액" />
    <button id="vending-machine-charge-button">충전하기</button>
  </div>
  <div>
    보유금액 <span id="vending-machine-charge-amount">${totalCoin}원</span>
  </div>
  <div class="now-vendingmachine-charge-coin"></div>
  `;
}

function createVendingMachineCoinTable() {
  return `
  <h2> 자판기가 보유한 동전 </h2>
  <table class="vending-machine-coin-table">
    <tr><th>동전</th><th>개수</th></tr>
    <tr>
      <td>500원</td><td id="vending-machine-coin-500-quantity"></td>
    </tr>
    <tr><td>100원</td><td id="vending-machine-coin-100-quantity"></td></tr>
    <tr><td>50원</td><td id="vending-machine-coin-50-quantity"></td></tr>
    <tr><td>10원</td><td id="vending-machine-coin-10-quantity"></td></tr>
  </table>
  `;
}

export default function renderVendingMachineManageMenu() {
  $('.tab-content-container').innerHTML = createChargeCoinElement(
    getTotalVendingCoin()
  );
  $('.now-vendingmachine-charge-coin').innerHTML =
    createVendingMachineCoinTable();
}
