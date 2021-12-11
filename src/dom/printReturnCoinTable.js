import { DOM_ID_SELECTOR, COIN_UNIT } from '../constants.js';
import makeCoinDomIdMapper from '../utils/makeCoinDomIdMapper.js';

const getCoinDomIdMapper = () => {
  return makeCoinDomIdMapper([
    DOM_ID_SELECTOR.coin500Quantity,
    DOM_ID_SELECTOR.coin100Quantity,
    DOM_ID_SELECTOR.coin50Quantity,
    DOM_ID_SELECTOR.coin10Quantity,
  ]);
};

const printReturnCoinTable = (coins) => {
  const coinDomIdMapper = getCoinDomIdMapper();

  for (let coin in coinDomIdMapper) {
    const $coinQuantity = document.getElementById(coinDomIdMapper[coin]);
    $coinQuantity.innerText = coins[coin] + COIN_UNIT;
  }
};

export default printReturnCoinTable;
