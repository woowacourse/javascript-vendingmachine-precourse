import { $ } from '../../utils/querySelector.js';
import { AMOUNT_ID, COIN_UNITS, STORAGE_NAME } from '../../utils/constants.js';
import { isValidInputAmount } from '../../utils/validation.js';
import { showConvertedCoins } from '../../view/coinCharge.js';
import { getLocalStorage, setLocalStorage } from '../../utils/storage.js';
import { showCurrentAmount } from '../../view/view.js';
import { calculationCurrentAmount } from '../../utils/calculation.js';

const convertAmountIntoCoins = (convertedCoins, amount) => {
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

export const handleCoinChargeSubmit = (convertedCoins) => {
  let chargedCoin = Number($('#vending-machine-charge-input').value);
  const storedChargeCoins = getLocalStorage(STORAGE_NAME.COIN);

  if (!isValidInputAmount(chargedCoin)) {
    return;
  }

  convertAmountIntoCoins(convertedCoins, chargedCoin);
  chargedCoin += calculationCurrentAmount(storedChargeCoins);
  showCurrentAmount(AMOUNT_ID.MACHINE, chargedCoin);
  showConvertedCoins(convertedCoins);
  setLocalStorage(STORAGE_NAME.COIN, convertedCoins);
};
