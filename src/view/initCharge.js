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
  CHARGE_COIN_TALBE_ID,
  COINS_STORAGE_KEY,
  COIN_SUM_KEY,
} from '../constant/constant.js';

function renderChargeInput($charge) {
  const $inputContainer = document.createElement('div');
  const change = localStorage.getItem(COIN_SUM_KEY);

  $inputContainer.innerHTML = `
    <h3>${CHARGE_TITLE}</h3>
    <form>
      <input id="${CHARGE_INPUT_ID}" type="number"></input>
      <button id="${CHARGE_BUTTON_ID}">${CHARGE_BUTTON_TITLE}</button>
    </form>
    <br>
    <span>${CHARGE_AMOUNT_TITLE}:</span>
    <span id="${CHARGE_AMOUNT_ID}">${change || ''}</span>
  `;
  $charge.append($inputContainer);
}

export function coinListHeaderTemplate() {
  return `
    <tr align="center" bgcolor="white" height="40">
      <td align="center" width="60">${COIN_TITLE}</td> 
      <td align="center" width="60">${COIN_AMOUNT_TITLE}</td>
    </tr>
  `;
}

function getCoinTextContent(coins, index) {
  return coins ? `${coins[index]}개` : '';
}

function coinTemplate(coins, ids, titles) {
  return ids.map((id, index) => `
    <tr align="center" bgcolor="white" height="40">
      <td align="center" width="62">${titles[index]}</td> 
      <td id="${id}" align="center" width="62">
        ${getCoinTextContent(coins, index)}
      </td>
    </tr>
  `).join('');
}

export function coinListTemplate(ids) {
  const coins = JSON.parse(localStorage.getItem(COINS_STORAGE_KEY));
  const titles = [TITLE_500, TITLE_100, TITLE_50, TITLE_10];

  return coinTemplate(coins, ids, titles);
}

function renderChargeCoins($charge) {
  const $coinContainer = document.createElement('div');
  const ids = [
    CHARGE_500_QUANTITY_ID,
    CHARGE_100_QUANTITY_ID,
    CHARGE_50_QUANTITY_ID,
    CHARGE_10_QUANTITY_ID,
  ];

  $coinContainer.innerHTML = `
    <br><br>
    <h3>${CHARGE_COIN_TITLE}</h3>
    <table id="${CHARGE_COIN_TALBE_ID}" bgcolor="black" border="1" style="border-collapse:collapse;">
    ${coinListHeaderTemplate()}
    ${coinListTemplate(ids)}
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
