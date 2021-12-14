import { COINS, coinType } from '../model/VendingMachine.mjs';

const $fragment = new DocumentFragment();

function renderChargeInputWrap() {
  const $chargeInputWrap = document.createElement('section');
  $chargeInputWrap.id = 'chargeInputWrap';

  $chargeInputWrap.innerHTML = `
    <h2>자판기 동전 충전하기</h2>
    <div>
      <input id="vending-machine-charge-input" placeholder="자판기가 보유할 금액"></input>
      <button id="vending-machine-charge-button">충전하기</button>  
    </div>
    <p id="vending-machine-charge-amount-title">보유 금액: <span id="vending-machine-charge-amount"></span></p>
  `;

  $fragment.appendChild($chargeInputWrap);
}

function makeRowCell() {
  return COINS.map(coin => {
    return `
     <tr>
       <td>${coin}원</td>
       <td><span id="vending-machine-coin-${coin}-quantity"></span></td>
     </tr>`;
  });
}

function renderAmountCoinsWrap() {
  const $amountOfCoins = document.createElement('section');
  $amountOfCoins.id = 'amountOfCoinsWrap';

  $amountOfCoins.innerHTML = `
    <h2>자판기가 보유한 동전</h2>
    <table>
      <thead>
        <th>동전</th>
        <th>개수</th>
      </thead>
      <tbody>
      ${makeRowCell().join('')}
      </tbody>
    </table>
  `;
  $fragment.appendChild($amountOfCoins);
}

function makeAmountOfCoinsText(moneyType) {
  const amountOfCoins = JSON.parse(localStorage.getItem('amount-of-coins'));
  let coin = document.querySelector(`#vending-machine-coin-${moneyType}-quantity`);
  coin.textContent = amountOfCoins[`${moneyType}_WON`] + '개';
}

function renderAmountCoins() {
  if (!localStorage.getItem('amount-of-coins')) return;

  for (let moneyType of Object.values(coinType)) {
    makeAmountOfCoinsText(moneyType);
  }
}

function renderVendingMachineChargeAmount() {
  const vendingMachineChargeAmount = document.querySelector('#vending-machine-charge-amount');
  vendingMachineChargeAmount.textContent = localStorage.getItem('vending-machine-charge-amount');
}

function renderProductAddPageInit() {
  const $app = document.querySelector('#app');
  const $main = document.createElement('main');
  $main.id = 'vendingMachineManageWrap';

  renderChargeInputWrap();
  renderAmountCoinsWrap();
  $main.appendChild($fragment);
  $app.appendChild($main);

  renderVendingMachineChargeAmount();
  renderAmountCoins();
}

function renderVendingMachineManagePage() {
  renderProductAddPageInit();
}

export { renderVendingMachineChargeAmount, renderAmountCoins, renderVendingMachineManagePage };
