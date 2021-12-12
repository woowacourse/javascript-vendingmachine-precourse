import { $ } from '../dom/dom.js';
import handleChargeButtonEvent from '../modules/handleChargeButtonEvent.js';

import handlePurchaseButtonEvent from '../modules/handlePurchaseButtonEvent.js';

export default function controlProductPurchase() {
  $('#charge-button').addEventListener('click', () => {
    handleChargeButtonEvent();
  });
  $('.purchase-button').addEventListener('click', (e) => {
    handlePurchaseButtonEvent(e);
  });
  $('#coin-return-button').addEventListener('click', () => {});
}
