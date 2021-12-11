import { DOM_ID_SELECTOR, ERROR_MESSAGE } from './constants.js';
import printChargeAmount from './printChargeAmount.js';
import printReturnCoinTable from './printReturnCoinTable.js';

const isEnabledReturnCoin = (vendingMachine) => {
  if (vendingMachine.getMoney() > vendingMachine.coin.getAmount()) {
    alert(ERROR_MESSAGE.lackOfCoin);
    return false;
  }

  return true;
};

const isEmpty = (vendingMachine) => {
  if (vendingMachine.getMoney() === 0) {
    alert(ERROR_MESSAGE.noMoney);
    return true;
  }

  return false;
};

const attachReturnCoinEvent = (vendingMachine) => {
  const $coinReturnButton = document.getElementById(DOM_ID_SELECTOR.coinReturnButton);
  $coinReturnButton.addEventListener('click', () => {
    if (isEnabledReturnCoin(vendingMachine) && !isEmpty(vendingMachine)) {
      printReturnCoinTable(vendingMachine.returnCoin());
      printChargeAmount(vendingMachine.getMoney());
      vendingMachine.save();
    }
  });
};

export default attachReturnCoinEvent;
