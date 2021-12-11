import { $ } from '../../utils/querySelector.js';
import { COIN_UNITS, ERROR_MESSAGE, STANDARD } from '../../utils/constants.js';
import { isDivideByTen } from '../../utils/validation.js';
import { coinChargeTemplate } from './coinChargeTemplate.js';

let currentAmount = STANDARD.CURRENT_MONEY;

const convertAmountIntoCoins = (amount) => {
  let remainAmount = amount;
  while (remainAmount > 0) {
    // eslint-disable-next-line no-loop-func
    const coinUnit = COIN_UNITS.filter((coin) => coin <= remainAmount);
    // eslint-disable-next-line no-undef
    const pickedCoin = MissionUtils.Random.pickNumberInList(coinUnit);
    remainAmount -= pickedCoin;
    console.log(coinUnit, pickedCoin, remainAmount);
  }
};

const showCurrentAmount = (chargedCoin) => {
  currentAmount += chargedCoin;
  $('#vending-machine-charge-amount').innerHTML = `보유금액: ${currentAmount}`;
};

// eslint-disable-next-line consistent-return
const handleCoinChargeSubmit = (event) => {
  event.preventDefault();
  const chargedCoin = Number($('#vending-machine-charge-input').value);

  if (!isDivideByTen(chargedCoin)) {
    $('#vending-machine-charge-input').value = '';
    return alert(ERROR_MESSAGE.NOT_DIVIDE_BY_TEN);
  }

  showCurrentAmount(chargedCoin);
  convertAmountIntoCoins(currentAmount);
};

export const showCoinCharge = () => {
  $('#app-container').innerHTML = coinChargeTemplate;
  $('form').addEventListener('submit', handleCoinChargeSubmit);
};
