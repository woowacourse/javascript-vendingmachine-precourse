import { USERMONEY_STORAGE_NAME } from '../constants/constants.js';
import { $ } from '../dom/dom.js';
import store from '../storage/store.js';

export default function renderInsertCoinShowElement() {
  const userMoneyStorage = store.getLocalStorage(USERMONEY_STORAGE_NAME);
  if (userMoneyStorage) {
    $('#charge-amount').innerText = `${userMoneyStorage}`;
  } else {
    $('#charge-amount').innerText = `0`;
  }
}
