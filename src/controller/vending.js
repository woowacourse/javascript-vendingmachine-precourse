import { KEY, SELECTOR } from '../model/constants.js';
import { $, getItemOrNull, setItem } from './utils.js';
import VendingMachine from '../model/vendingMachine.js';

const chargeVending = () => {
  const chargeInput = parseInt($(SELECTOR.vendingChargeInput).value);
  let vending = getItemOrNull(KEY.vending);
  if (vending) {
  } else if (vending === null) {
    vending = new VendingMachine(chargeInput);
  }
  setItem(KEY.vending, vending);
};

const initTable = () => {
  const vending = getItemOrNull(KEY.vending);
  if (vending) {
    vending.coins.forEach(x => {
      $(`vending-machine-coin-${x.coin}-quantity`).innerHTML = `${x.quantity}개`;
    });
  }
};

export const initAllVending = () => {
  initTable();
  $(SELECTOR.vendingChargeButton).addEventListener('click', () => chargeVending());
};
