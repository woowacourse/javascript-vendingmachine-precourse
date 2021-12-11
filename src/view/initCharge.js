const CHARGE_TITLE = '자판기 동전 충전하기';
const CHARGE_BUTTON_TITLE = '충전하기';
const CHARGE_AMOUNT_TITLE = '보유 금액';
const CHARGE_COIN_TITLE = '자판기가 보유한 동전';
const COIN_TITLE = '동전';
const COIN_AMOUNT_TITLE = '개수';

const TITLE_500 = '500원';
const TITLE_100 = '100원';
const TITLE_50 = '50원';
const TITLE_10 = '10원';

const CHARGE_INPUT_ID = 'vending-machine-charge-input';
const CHARGE_BUTTON_ID = 'vending-machine-charge-button';
const CHARGE_AMOUNT_ID = 'vending-machine-charge-amount';

const CHARGE_500_QUANTITY_ID = 'vending-machine-coin-500-quantity';
const CHARGE_100_QUANTITY_ID = 'vending-machine-coin-100-quantity';
const CHARGE_50_QUANTITY_ID = 'vending-machine-coin-50-quantity';
const CHARGE_10_QUANTITY_ID = 'vending-machine-coin-10-quantity';

export const CHARGE_CONTAINER_ID = 'charge-container';

function renderChargeInput($charge) {
  const $inputContainer = document.createElement('div');

  $inputContainer.innerHTML = `
    <h3>${CHARGE_TITLE}</h3>
    <form>
      <input id="${CHARGE_INPUT_ID}" type="number"></input>
      <button id="${CHARGE_BUTTON_ID}">${CHARGE_BUTTON_TITLE}</button>
    </form>
    <br>
    <span>${CHARGE_AMOUNT_TITLE}:</span>
    <span id="${CHARGE_AMOUNT_ID}"></span>
  `;
  $charge.append($inputContainer);
}

function coinListHeaderTemplate() {
  return `
    <tr align="center" bgcolor="white" height="40">
      <td align="center" width="60">${COIN_TITLE}</td> 
      <td align="center" width="60">${COIN_AMOUNT_TITLE}</td>
    </tr>
  `;
}

function coinListTemplate() {
  return `
    <tr align="center" bgcolor="white" height="40">
      <td align="center" width="62">${TITLE_500}</td> 
      <td id="${CHARGE_500_QUANTITY_ID}" align="center" width="62"></td>
    </tr>
    <tr align="center" bgcolor="white" height="40">
      <td align="center" width="62">${TITLE_100}</td> 
      <td id="${CHARGE_100_QUANTITY_ID}" align="center" width="62"></td>
    </tr>
    <tr align="center" bgcolor="white" height="40">
      <td align="center" width="62">${TITLE_50}</td> 
      <td id="${CHARGE_50_QUANTITY_ID}" align="center" width="62"></td>
    </tr>
    <tr align="center" bgcolor="white" height="40">
      <td align="center" width="62">${TITLE_10}</td> 
      <td id="${CHARGE_10_QUANTITY_ID}" align="center" width="62"></td>
    </tr>
  `;
}

function renderChargeCoins($charge) {
  const $coinContainer = document.createElement('div');

  $coinContainer.innerHTML = `
    <br><br>
    <h3>${CHARGE_COIN_TITLE}</h3>
    <table bgcolor="black" border="1" style="border-collapse:collapse;">
    ${coinListHeaderTemplate()}
    ${coinListTemplate()}
    </table>
  `;
  $charge.append($coinContainer);
}

export default function initCharge($appDiv) {
  const $charge = document.createElement('div');
  $charge.id = CHARGE_CONTAINER_ID;

  renderChargeInput($charge);
  renderChargeCoins($charge);
  $appDiv.append($charge);
}
