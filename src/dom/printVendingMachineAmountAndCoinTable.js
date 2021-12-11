import { DOM_ID_SELECTOR } from '../constants.js';
import makeCoinDomIdMapper from '../utils/makeCoinDomIdMapper.js';

const printVendingMachineAmount = (amount) => {
  const $vendingMachineChargeAmount = document.getElementById(DOM_ID_SELECTOR.vendingMachineChargeAmount);
  $vendingMachineChargeAmount.innerText = amount;
};

const getCoinDomIdMapper = () => {
  return makeCoinDomIdMapper([
    DOM_ID_SELECTOR.vendingMachineCoin500Quantity,
    DOM_ID_SELECTOR.vendingMachineCoin100Quantity,
    DOM_ID_SELECTOR.vendingMachineCoin50Quantity,
    DOM_ID_SELECTOR.vendingMachineCoin10Quantity,
  ]);
};

const printVendingMachineCoinTable = (coinQuantity) => {
  const coinDomIdMapper = getCoinDomIdMapper();

  for (let coin in coinDomIdMapper) {
    const $coinQuantity = document.getElementById(coinDomIdMapper[coin]);
    $coinQuantity.innerText = `${coinQuantity[coin]}개`;
  }
};

const printVendingMachineAmountAndCoinTable = (coin) => {
  printVendingMachineAmount(coin.getAmount());
  printVendingMachineCoinTable(coin.getCoinQuantity());
};

export default printVendingMachineAmountAndCoinTable;
