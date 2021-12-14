import { COIN_TYPE, ELEMENT_ID, ERROR_MESSAGE, NUMBER } from "../constants.js";

export function chargeAddValiate(coin) {
  let result = true;
  if (!coin) {
    alert(ERROR_MESSAGE.CHARGE_NOEMPTY_INPUT);
    result = false;
  } else if (Number(coin) - parseInt(Number(coin)) !== NUMBER.ZERO || coin <= NUMBER.ZERO) {
    alert(ERROR_MESSAGE.CHARGE_NATURALNUM);
    result = false;
  }

  return result;
}

export function renderContainRandomCoin(coins) {
  const contain500Coin = document.querySelector(ELEMENT_ID.MACHINE_500_QUANTITY);
  const contain100Coin = document.querySelector(ELEMENT_ID.MACHINE_100_QUANTITY);
  const contain50Coin = document.querySelector(ELEMENT_ID.MACHINE_50_QUANTITY);
  const contain10Coin = document.querySelector(ELEMENT_ID.MACHINE_10_QUANTITY);
  contain500Coin.innerText = `${coins[COIN_TYPE.FIVEHUN]}개`;
  contain100Coin.innerText = `${coins[COIN_TYPE.ONEHUN]}개`;
  contain50Coin.innerText = `${coins[COIN_TYPE.FIFTY]}개`;
  contain10Coin.innerText = `${coins[COIN_TYPE.TEN]}개`;
}