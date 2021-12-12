import getUserChargeInput from '../modules/getUserChargeInput.js';
import setUserMoneyStorage from '../storage/setUserMoneyStorage.js';
import initInsertCoinInputElement from '../views/initInsertCoinInputElement.js';
import renderInsertCoinShowElement from '../views/renderInsertCoinShowElement.js';

export default function handleChargeButtonEvent() {
  const userChargeInput = getUserChargeInput();
  setUserMoneyStorage(userChargeInput);
  renderInsertCoinShowElement();
  initInsertCoinInputElement();
}
