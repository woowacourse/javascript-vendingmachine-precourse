import { $ } from '../utils/querySelector.js';
import { getLocalStorage } from '../utils/storage.js';
import { AMOUNT_ID, STORAGE_NAME } from '../utils/constants.js';
import { coinChargeTemplate, haveCoinTemplate } from '../components/charge/coinChargeTemplate.js';
import { calculationCurrentAmount } from '../utils/calculation.js';
import { handleCoinChargeSubmit } from '../components/charge/coinCharge.js';
import { showCurrentAmount } from './currentAmount.js';

const addConvertedCoins = (unit, quantity) => {
  const haveCoin = haveCoinTemplate(unit, quantity);
  $('#vending-machine-coin-list').insertAdjacentHTML('afterbegin', haveCoin);
};

export const showConvertedCoins = (convertedCoins) => {
  $('#vending-machine-coin-list').innerHTML = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const unit in convertedCoins) {
    addConvertedCoins(unit, convertedCoins[unit]);
  }
};

const setManageMenuScreen = (storedChargeCoins) => {
  showConvertedCoins(storedChargeCoins);
  const currentAmount = calculationCurrentAmount(storedChargeCoins);
  showCurrentAmount(AMOUNT_ID.MACHINE, currentAmount);
};

export const showVendingMachineManageMenu = () => {
  $('#app-container').innerHTML = coinChargeTemplate;
  const storedChargeCoins = getLocalStorage(STORAGE_NAME.COIN);
  let convertedCoins = { 500: 0, 100: 0, 50: 0, 10: 0 };

  if (storedChargeCoins) {
    setManageMenuScreen(storedChargeCoins);
    convertedCoins = storedChargeCoins;
  }

  $('form').addEventListener('submit', (event) => {
    event.preventDefault();
    handleCoinChargeSubmit(convertedCoins);
  });
};
