import { VENDING_MACHINE } from '../common/constants/constants.js';
import { getRandomCoinsAmongList } from '../common/utils.js';
import { printChargedAmountToScreen } from '../controller/vending-machine-charge/print-to-screen.js';

export const saveCharegedAmountToStorage = (coinChargeInputValue) => {
  let chargedAmount = {};

  chargedAmount.value = coinChargeInputValue;

  let prevChargedAmount = JSON.parse(
    localStorage.getItem(VENDING_MACHINE.CHARGED)
  );

  if (prevChargedAmount === null) {
    prevChargedAmount = [];
  }

  let finalChargedAmountList = prevChargedAmount.concat(chargedAmount);

  localStorage.setItem(
    VENDING_MACHINE.CHARGED,
    JSON.stringify(finalChargedAmountList)
  );
};

export const saveRandomAmountOfCoins = () => {
  const sum = printChargedAmountToScreen();
  const randomCoinAmount = getRandomCoinsAmongList(sum);

  localStorage.setItem('coinList', JSON.stringify(randomCoinAmount));

  return JSON.parse(localStorage.getItem('coinList'));
};
