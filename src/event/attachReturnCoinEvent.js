import { DOM_ID_SELECTOR, ERROR_MESSAGE } from '../constants.js';
import printChargeAmount from '../dom/printChargeAmount.js';
import printReturnCoinTable from '../dom/printReturnCoinTable.js';

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
    if (!isEmpty(vendingMachine)) {
      printReturnCoinTable(vendingMachine.returnCoin());
      printChargeAmount(vendingMachine.getMoney());
      vendingMachine.save();
    }
  });
};

export default attachReturnCoinEvent;
