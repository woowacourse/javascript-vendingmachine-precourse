import { DOM_ID_SELECTOR } from './constants.js';

const printReturnCoinTable = (coins) => {
  const $coin500Quantity = document.getElementById(DOM_ID_SELECTOR.coin500Quantity);
  const $coin100Quantity = document.getElementById(DOM_ID_SELECTOR.coin100Quantity);
  const $coin50Quantity = document.getElementById(DOM_ID_SELECTOR.coin50Quantity);
  const $coin10Quantity = document.getElementById(DOM_ID_SELECTOR.coin10Quantity);

  $coin500Quantity.innerText = `${coins[500]}개`;
  $coin100Quantity.innerText = `${coins[100]}개`;
  $coin50Quantity.innerText = `${coins[50]}개`;
  $coin10Quantity.innerText = `${coins[10]}개`;
};

export default printReturnCoinTable;
