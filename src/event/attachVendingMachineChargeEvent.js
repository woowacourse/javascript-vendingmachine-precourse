import { DOM_ID_SELECTOR, ERROR_MESSAGE } from '../constants.js';
import printVendingMachineAmountAndCoinTable from '../dom/printVendingMachineAmountAndCoinTable.js';
import isValidPrice from '../utils/isValidPrice.js';

const isValid = (price) => {
  if (!isValidPrice(price)) {
    alert(ERROR_MESSAGE.vendingCharge);
    return false;
  }

  return true;
};

const getVendingMachineChargeInputValue = () => {
  return document.getElementById(DOM_ID_SELECTOR.vendingMachineChargeInput).value;
};

const clearVendingMachineChargeInput = () => {
  document.getElementById(DOM_ID_SELECTOR.vendingMachineChargeInput).value = '';
};

const attachVendingMachineChargeEvent = (coin) => {
  const $vendingMachineChargeButton = document.getElementById(DOM_ID_SELECTOR.vendingMachineChargeButton);

  $vendingMachineChargeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const price = getVendingMachineChargeInputValue();
    if (isValid(price)) {
      clearVendingMachineChargeInput();
      coin.charge(Number(price));
      coin.save();
      printVendingMachineAmountAndCoinTable(coin);
    }
  });
};

export default attachVendingMachineChargeEvent;
