import { DOM_ID_SELECTOR, ERROR_MESSAGE } from './constants.js';
import printChargeAmount from './printChargeAmount.js';

const isValidPrice = (price) => {
  const priceNumber = Number(price);

  if (Number.isNaN(priceNumber) || !Number.isInteger(priceNumber) || priceNumber <= 0 || priceNumber % 10 !== 0) {
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
    if (isValidPrice(price)) {
      clearChargeInput();
      vendingMachine.insertMoney(Number(price));
      vendingMachine.save();
      printChargeAmount(vendingMachine.getMoney());
    }
  });
};

export default attachChargeEvent;
