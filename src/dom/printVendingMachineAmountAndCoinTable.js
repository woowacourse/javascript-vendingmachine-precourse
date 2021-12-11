import { DOM_ID_SELECTOR } from '../constants.js';

const printVendingMachineAmount = (amount) => {
  const $vendingMachineChargeAmount = document.getElementById(DOM_ID_SELECTOR.vendingMachineChargeAmount);
  $vendingMachineChargeAmount.innerText = amount;
};

const printVendingMachineCoinTable = (coinQuantity) => {
  const $vendingMachineCoin500Quantity = document.getElementById(DOM_ID_SELECTOR.vendingMachineCoin500Quantity);
  $vendingMachineCoin500Quantity.innerText = `${coinQuantity[500]}개`;

  const $vendingMachineCoin100Quantity = document.getElementById(DOM_ID_SELECTOR.vendingMachineCoin100Quantity);
  $vendingMachineCoin100Quantity.innerText = `${coinQuantity[100]}개`;

  const $vendingMachineCoin50Quantity = document.getElementById(DOM_ID_SELECTOR.vendingMachineCoin50Quantity);
  $vendingMachineCoin50Quantity.innerText = `${coinQuantity[50]}개`;

  const $vendingMachineCoin10Quantity = document.getElementById(DOM_ID_SELECTOR.vendingMachineCoin10Quantity);
  $vendingMachineCoin10Quantity.innerText = `${coinQuantity[10]}개`;
};

const printVendingMachineAmountAndCoinTable = (coin) => {
  printVendingMachineAmount(coin.getAmount());
  printVendingMachineCoinTable(coin.getCoinQuantity());
};

export default printVendingMachineAmountAndCoinTable;
