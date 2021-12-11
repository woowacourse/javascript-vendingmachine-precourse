import { DOM_ID_SELECTOR, ERROR_MESSAGE } from './constants.js';
import printVendingMachineAmountAndCoinTable from './printVendingMachineAmountAdnCoinTable.js';

const isValidPrice = (price) => {
  const priceNumber = Number(price);

  if (Number.isNaN(priceNumber) || !Number.isInteger(priceNumber) || priceNumber <= 0 || priceNumber % 10 !== 0) {
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
    if (isValidPrice(price)) {
      clearVendingMachineChargeInput();
      coin.charge(Number(price));
      printVendingMachineAmountAndCoinTable(coin);
    }
  });
};

export default attachVendingMachineChargeEvent;
