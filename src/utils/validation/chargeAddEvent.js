import { COIN_TYPE, ERROR_MESSAGE } from "../constants.js";

export function chargeAddValiate(coin) {
  let result = true;
  if (!coin) {
    alert(ERROR_MESSAGE.CHARGE_NOEMPTY_INPUT);
    result = false;
  } else if (Number(coin) - parseInt(Number(coin)) !== 0 || coin <= 0) {
    alert(ERROR_MESSAGE.CHARGE_NATURALNUM);
    result = false;
  }

  return result;
}

export function renderContainRandomCoin(coins) {
  const contain500Coin = document.querySelector('#vending-machine-coin-500-quantity');
  const contain100Coin = document.querySelector('#vending-machine-coin-100-quantity');
  const contain50Coin = document.querySelector('#vending-machine-coin-50-quantity');
  const contain10Coin = document.querySelector('#vending-machine-coin-10-quantity');
  contain500Coin.innerText = `${coins[COIN_TYPE.FIVEHUN]}개`;
  contain100Coin.innerText = `${coins[COIN_TYPE.ONEHUN]}개`;
  contain50Coin.innerText = `${coins[COIN_TYPE.FIFTY]}개`;
  contain10Coin.innerText = `${coins[COIN_TYPE.TEN]}개`;
}