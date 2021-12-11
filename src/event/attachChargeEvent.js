import { DOM_ID_SELECTOR, ERROR_MESSAGE } from '../constants.js';
import printChargeAmount from '../dom/printChargeAmount.js';
import isValidPrice from '../utils/isValidPrice.js';

const isValid = (price) => {
  if (!isValidPrice(price)) {
    alert(ERROR_MESSAGE.insertPrice);
    return false;
  }

  return true;
};

const getChargeInputValue = () => {
  return document.getElementById(DOM_ID_SELECTOR.chargeInput).value;
};

const clearChargeInput = () => {
  document.getElementById(DOM_ID_SELECTOR.chargeInput).value = '';
};

const attachChargeEvent = (vendingMachine) => {
  const $chargeButton = document.getElementById(DOM_ID_SELECTOR.chargeButton);

  $chargeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const price = getChargeInputValue();
    if (isValid(price)) {
      clearChargeInput();
      vendingMachine.insertMoney(Number(price));
      vendingMachine.save();
      printChargeAmount(vendingMachine.getMoney());
    }
  });
};

export default attachChargeEvent;
