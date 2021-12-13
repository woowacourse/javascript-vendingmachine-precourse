import { $ } from '../dom/dom.js';
import handleChargeButtonEvent from '../modules/handleChargeButtonEvent.js';

import handlePurchaseButtonEvent from '../modules/handlePurchaseButtonEvent.js';

export default function controlProductPurchase() {
  $('#charge-button').addEventListener('click', () => {
    handleChargeButtonEvent();
  });
  document.querySelectorAll('.purchase-button').forEach((item) => {
    item.addEventListener('click', (e) => {
      handlePurchaseButtonEvent(e);
    });
  });
  $('#coin-return-button').addEventListener('click', () => {});
}
