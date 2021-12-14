import { $ } from '../../utils/querySelector.js';
import { COIN_UNITS, ERROR_MESSAGE, STANDARD, STORAGE_NAME } from '../../utils/constants.js';
import { isDivideByTen } from '../../utils/validation.js';
import { showConvertedCoins, coinChargeTemplate } from './coinChargeTemplate.js';
import { getLocalStorage, setLocalStorage } from '../storage/storage.js';
import { showCurrentAmount } from '../../view/view.js';

let currentAmount = STANDARD.CURRENT_MONEY;
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

const showCurrentMachineAmount = (storedChargeCoins) => {
  let currentCoin = STANDARD.CURRENT_MONEY;
  // eslint-disable-next-line no-restricted-syntax
  for (const unit in storedChargeCoins) {
    currentCoin += storedChargeCoins[unit] * unit;
  }
  showCurrentAmount(vendingMachineChargeAmountId, currentCoin);
};

const handleCoinChargeSubmit = (event) => {
  event.preventDefault();
  const chargedCoin = Number($('#vending-machine-charge-input').value);

  if (isDivideByTen(chargedCoin)) {
    return alert(ERROR_MESSAGE.NOT_DIVIDE_BY_TEN);
  }

  currentAmount += chargedCoin;
  showCurrentAmount(vendingMachineChargeAmountId, currentAmount);
  setLocalStorage(STORAGE_NAME.MACHINE_AMOUNT, currentAmount);
  convertAmountIntoCoins(chargedCoin);
  showConvertedCoins(convertedCoins);
  setLocalStorage(STORAGE_NAME.COIN, convertedCoins);
};

export const showManageMenu = () => {
  $('#app-container').innerHTML = coinChargeTemplate;
  const storedChargeCoins = getLocalStorage(STORAGE_NAME.COIN);

  if (storedChargeCoins.length !== 0) {
    convertedCoins = storedChargeCoins;
    showConvertedCoins(storedChargeCoins);
    showCurrentMachineAmount(storedChargeCoins);
  }

  $('form').addEventListener('submit', handleCoinChargeSubmit);
};
