import { PRODUCT } from '../common/constants/constants.js';
import { getRandomCoinsAmongList } from '../common/utils.js';
import { printChargedAmountToScreen } from '../controller/vending-machine-charge/print-to-screen.js';
export const saveCharegedAmountToStorage = (coinChargeInputValue) => {
  let chargedAmount = {}; // 추가할 값

  chargedAmount.value = coinChargeInputValue;

  // localStorage 저장된 값을 분해해서
  let prevChargedAmount = JSON.parse(localStorage.getItem(PRODUCT.CHARGED));
  if (prevChargedAmount === null) {
    prevChargedAmount = [];
  }

  let finalChargedAmountList = prevChargedAmount.concat(chargedAmount);

  localStorage.setItem(PRODUCT.CHARGED, JSON.stringify(finalChargedAmountList));
};

export const saveRandomAmountOfCoins = () => {
  const sum = printChargedAmountToScreen();
  console.log(sum);
  const randomCoinAmount = getRandomCoinsAmongList(sum);

  localStorage.setItem('coinList', JSON.stringify(randomCoinAmount));

  return JSON.parse(localStorage.getItem('coinList'));
};
