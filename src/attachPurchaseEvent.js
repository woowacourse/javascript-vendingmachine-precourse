import { ERROR_MESSAGE } from './constants.js';
import printChargeAmount from './printChargeAmount.js';
import printProductPurchaseItemTable from './printProductPurchaseItemTable.js';

const isEnabledToPurchase = (price, amount) => {
  if (price > amount) {
    alert(ERROR_MESSAGE.lackOfMoney);
    return false;
  }

  return true;
};

const attachPurchaseEvent = ($button, vendingMachine) => {
  const productName = $button.value;
  $button.addEventListener('click', () => {
    if (isEnabledToPurchase(vendingMachine.getProductPrice(productName), vendingMachine.getMoney())) {
      vendingMachine.sell(productName);
      printProductPurchaseItemTable(vendingMachine);
      printChargeAmount(vendingMachine.getMoney());
    }
  });
};

export default attachPurchaseEvent;
