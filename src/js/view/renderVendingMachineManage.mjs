const $fragment = new DocumentFragment();

function chargeInput() {
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

function amount() {
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
        <tr>
          <td>500원</td>
          <td><span id="vending-machine-coin-500-quantity"></span></td>
        </tr>
        <tr>
          <td>100원</td>
          <td><span id="vending-machine-coin-100-quantity"></span></td>
        </tr>
        <tr>
          <td>50원</td>
          <td><span id="vending-machine-coin-50-quantity"></span></td>
        </tr>
        <tr>
          <td>10원</td>
          <td><span id="vending-machine-coin-10-quantity"></span></td>
        </tr>
      </tbody>
    </table>
  `;
  $fragment.appendChild($amountOfCoins);
}

export function vendingMachineChargeAmount() {
  const vendingMachineChargeAmount = document.querySelector('#vending-machine-charge-amount');
  vendingMachineChargeAmount.textContent = localStorage.getItem('vending-machine-charge-amount');
}

export function renderVendingMachineManage() {
  const $app = document.querySelector('#app');
  const $main = document.createElement('main');
  $main.id = 'vendingMachineManageWrap';

  chargeInput();
  amount();
  $main.appendChild($fragment);
  $app.appendChild($main);
  vendingMachineChargeAmount();
}
