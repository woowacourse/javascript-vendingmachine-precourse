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

const clearVendingMachineChargeInput = () => {
  document.getElementById(DOM_ID_SELECTOR.vendingMachineChargeInput).value = '';
};

const printVendingMachineAmount = (amount) => {
  const $vendingMachineChargeAmount = document.getElementById(DOM_ID_SELECTOR.vendingMachineChargeAmount);
  $vendingMachineChargeAmount.innerText = amount;
};

const printVendingMachineCoinTable = (coinQuantity) => {
  const $vendingMachineCoin500Quantity = document.getElementById(DOM_ID_SELECTOR.vendingMachineCoin500Quantity);
  $vendingMachineCoin500Quantity.innerText = coinQuantity[500];

  const $vendingMachineCoin100Quantity = document.getElementById(DOM_ID_SELECTOR.vendingMachineCoin100Quantity);
  $vendingMachineCoin100Quantity.innerText = coinQuantity[100];

  const $vendingMachineCoin50Quantity = document.getElementById(DOM_ID_SELECTOR.vendingMachineCoin50Quantity);
  $vendingMachineCoin50Quantity.innerText = coinQuantity[50];

  const $vendingMachineCoin10Quantity = document.getElementById(DOM_ID_SELECTOR.vendingMachineCoin10Quantity);
  $vendingMachineCoin10Quantity.innerText = coinQuantity[10];
};

const attachVendingMachineChargeEvent = (coin) => {
  const $vendingMachineChargeButton = document.getElementById(DOM_ID_SELECTOR.vendingMachineChargeButton);

  $vendingMachineChargeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const price = getVendingMachineChargeInputValue();
    if (isValidPrice(price)) {
      clearVendingMachineChargeInput();
      coin.charge(Number(price));
      printVendingMachineAmount(coin.getAmount());
      printVendingMachineCoinTable(coin.getCoinQuantity());
    }
  });
};

export default attachVendingMachineChargeEvent;
