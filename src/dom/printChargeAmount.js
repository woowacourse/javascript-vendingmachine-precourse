import { DOM_ID_SELECTOR } from '../constants.js';

const printChargeAmount = (amount) => {
  const $chargeAmount = document.getElementById(DOM_ID_SELECTOR.chargeAmount);
  $chargeAmount.innerText = amount;
};

export default printChargeAmount;
