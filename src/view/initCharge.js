import {
  CHARGE_TITLE,
  CHARGE_INPUT_ID,
  CHARGE_BUTTON_ID,
  CHARGE_BUTTON_TITLE,
  CHARGE_AMOUNT_TITLE,
  CHARGE_AMOUNT_ID,
  COIN_TITLE,
  COIN_AMOUNT_TITLE,
  TITLE_500,
  CHARGE_500_QUANTITY_ID,
  TITLE_100,
  CHARGE_100_QUANTITY_ID,
  TITLE_50,
  CHARGE_50_QUANTITY_ID,
  TITLE_10,
  CHARGE_10_QUANTITY_ID,
  CHARGE_COIN_TITLE,
  CHARGE_CONTAINER_ID,
} from '../constant/constant.js';

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
