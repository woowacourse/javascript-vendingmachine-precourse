import { $ } from '../dom/dom.js';
import getUserChargeInput from '../modules/getUserChargeInput.js';
import setUserMoneyStorage from '../storage/setUserMoneyStorage.js';
import initInsertCoinInputElement from '../views/initInsertCoinInputElement.js';
import renderInsertCoinShowElement from '../views/renderInsertCoinShowElement.js';

export default function controlProductPurchase() {
  $('#charge-button').addEventListener('click', () => {
    const userChargeInput = getUserChargeInput();
    setUserMoneyStorage(userChargeInput);
    renderInsertCoinShowElement();
    initInsertCoinInputElement();
  });
  $('#purchase-button').addEventListener('click', () => {});
  $('#coin-return-button').addEventListener('click', () => {});
}
