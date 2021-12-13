import { PRODUCT } from '../common/constants/constants.js';
import { getRandomCoinsAmongList } from '../common/utils.js';
import { printMoneyToScreen } from '../controller/vending-machine-charge/print-to-screen.js';

export const saveAmountOfMoneyToStorage = (moneyChargeInputValue) => {
  let moneychargedAmount = {}; // 추가할 값

  moneychargedAmount.value = moneyChargeInputValue;

  // localStorage 저장된 값을 분해해서
  let prevChargedAmount = JSON.parse(localStorage.getItem(PRODUCT.MONEY));
  if (prevChargedAmount === null) {
    prevChargedAmount = [];
  }

  let finalChargedAmountList = prevChargedAmount.concat(moneychargedAmount);

  localStorage.setItem(PRODUCT.MONEY, JSON.stringify(finalChargedAmountList));
};

export const saveRandomAmountOfCoins = () => {
  const sum = printMoneyToScreen();
  const randomCoinAmount = getRandomCoinsAmongList(sum);

  localStorage.setItem('coinList', JSON.stringify(randomCoinAmount));

  return JSON.parse(localStorage.getItem('coinList'));
};
