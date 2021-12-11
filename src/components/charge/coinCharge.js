import { $ } from '../../utils/querySelector.js';
import { ERROR_MESSAGE } from '../../utils/constants.js';
import { isDivideByTen } from '../../utils/validation.js';
import { coinChargeTemplate } from './coinChargeTemplate.js';

const handleCoinChargeSubmit = (event) => {
  event.preventDefault();
  const chargedCoin = $('#vending-machine-charge-input').value;

  if (!isDivideByTen(chargedCoin)) {
    $('#vending-machine-charge-input').value = '';
    return alert(ERROR_MESSAGE.NOT_DIVIDE_BY_TEN);
  }
  console.log('통과');
};

export default function showCoinCharge() {
  $('#app-container').innerHTML = coinChargeTemplate;
  $('form').addEventListener('submit', handleCoinChargeSubmit);
}
