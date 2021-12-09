import {
  DRINK_STORAGE_NAME,
  USERMONEY,
  VENDINGCOIN_STORGAE_NAME,
} from '../constants/constants.js';
import store from './store.js';

export default function initStorage(name) {
  const localStorageData = store.getLocalStorage(name);
  if (localStorageData) {
    return localStorageData;
  } else {
    if (name === USERMONEY) {
      return 0;
    } else if (name === DRINK_STORAGE_NAME) {
      return [];
    } else if (name === VENDINGCOIN_STORGAE_NAME) {
      return { coin500: 0, coin100: 0, coin50: 0, coin10: 0 };
    }
  }
}
