import { DOM_ID_SELECTOR, ERROR_MESSAGE } from './constants.js';

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

const printVendingMachineAmount = (amount) => {
  const $vendingMachineChargeAmount = document.getElementById(DOM_ID_SELECTOR.vendingMachineChargeAmount);
  $vendingMachineChargeAmount.innerText = amount;
};

const attachVendingMachineChargeEvent = (coin) => {
  const $vendingMachineChargeButton = document.getElementById(DOM_ID_SELECTOR.vendingMachineChargeButton);

  $vendingMachineChargeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const price = getVendingMachineChargeInputValue();
    if (isValidPrice(price)) {
      coin.charge(Number(price));
      printVendingMachineAmount(coin.getAmount());
    }
  });
};

export default attachVendingMachineChargeEvent;
