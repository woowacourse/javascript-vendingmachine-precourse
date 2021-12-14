import { $ } from '../../utils/querySelector.js';
import { COIN_UNITS, STANDARD, STORAGE_NAME } from '../../utils/constants.js';
import { isValidInputAmount } from '../../utils/validation.js';
import { showConvertedCoins, coinChargeTemplate } from './coinChargeTemplate.js';
import { getLocalStorage, setLocalStorage } from '../storage/storage.js';
import { showCurrentAmount } from '../../view/view.js';

let convertedCoins = { 500: 0, 100: 0, 50: 0, 10: 0 };
const vendingMachineChargeAmountId = '#vending-machine-charge-amount';

const convertAmountIntoCoins = (amount) => {
  let remainAmount = amount;
  while (remainAmount > 0) {
    // eslint-disable-next-line no-loop-func
    const coinUnit = COIN_UNITS.filter((coin) => coin <= remainAmount);
    // eslint-disable-next-line no-undef
    const pickedCoin = MissionUtils.Random.pickNumberInList(coinUnit);
    convertedCoins[pickedCoin] += 1;
    remainAmount -= pickedCoin;
  }
};

const calculationCurrentAmount = (storedChargeCoins) => {
  let currentAmount = STANDARD.CURRENT_MONEY;
  // eslint-disable-next-line no-restricted-syntax
  for (const unit in storedChargeCoins) {
    currentAmount += storedChargeCoins[unit] * unit;
  }
  return currentAmount;
};

const handleCoinChargeSubmit = (event) => {
  event.preventDefault();
  let chargedCoin = Number($('#vending-machine-charge-input').value);
  const storedChargeCoins = getLocalStorage(STORAGE_NAME.COIN);

  if (!isValidInputAmount(chargedCoin)) {
    return;
  }

  convertAmountIntoCoins(chargedCoin);
  chargedCoin += calculationCurrentAmount(storedChargeCoins);
  showCurrentAmount(vendingMachineChargeAmountId, chargedCoin);
  showConvertedCoins(convertedCoins);
  setLocalStorage(STORAGE_NAME.COIN, convertedCoins);
};

export const showManageMenu = () => {
  $('#app-container').innerHTML = coinChargeTemplate;
  const storedChargeCoins = getLocalStorage(STORAGE_NAME.COIN);

  if (storedChargeCoins) {
    convertedCoins = storedChargeCoins;
    showConvertedCoins(storedChargeCoins);
    const currentAmount = calculationCurrentAmount(storedChargeCoins);
    showCurrentAmount(vendingMachineChargeAmountId, currentAmount);
  }

  $('form').addEventListener('submit', handleCoinChargeSubmit);
};
