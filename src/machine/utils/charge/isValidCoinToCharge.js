import { COIN_CHARGE } from '../../const.js';

const { min, divider } = COIN_CHARGE;

function isValidCoinToCharge(coinToCharge) {
  return coinToCharge >= min && coinToCharge % divider === 0;
}

export default isValidCoinToCharge;
