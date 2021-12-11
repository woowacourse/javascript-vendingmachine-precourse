import { $ } from '../../utils/querySelector.js';
import { ERROR_MESSAGE, STANDARD } from '../../utils/constants.js';
import { isDivideByTen } from '../../utils/validation.js';
import { coinChargeTemplate } from './coinChargeTemplate.js';

let currentAmount = STANDARD.CURRENT_MONEY;

const showCurrentAmount = (chargedCoin) => {
  currentAmount += chargedCoin;
  $('#vending-machine-charge-amount').innerHTML = `보유금액: ${currentAmount}`;
};

const handleCoinChargeSubmit = (event) => {
  event.preventDefault();
  const chargedCoin = Number($('#vending-machine-charge-input').value);

  if (!isDivideByTen(chargedCoin)) {
    $('#vending-machine-charge-input').value = '';
    return alert(ERROR_MESSAGE.NOT_DIVIDE_BY_TEN);
  }

  showCurrentAmount(chargedCoin);
};

export default function showCoinCharge() {
  $('#app-container').innerHTML = coinChargeTemplate;
  $('form').addEventListener('submit', handleCoinChargeSubmit);
}
