import { $ } from '../../utils/querySelector.js';
import { coinChargeTemplate } from './coinChargeTemplate.js';

export default function showCoinCharge() {
  $('#app-container').innerHTML = coinChargeTemplate;
}
