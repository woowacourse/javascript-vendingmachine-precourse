import {
  USERMONEY_STORAGE_NAME,
  VENDINGCOIN_STORGAE_NAME,
} from '../constants/constants.js';
import store from '../storage/store.js';
import getGridCoinCount from './getGridCoinCount.js';
import getTotalVendingCoin from './getTotalVendingCoin.js';

export default function computeReturnCoinCount() {
  const userMoney = store.getLocalStorage(USERMONEY_STORAGE_NAME);
  const vendingCoinTotal = getTotalVendingCoin();
  const vendingStorageData = store.getLocalStorage(VENDINGCOIN_STORGAE_NAME);
  if (Number(userMoney) >= Number(vendingCoinTotal)) {
    return vendingStorageData;
  } else {
    return getGridCoinCount(userMoney, vendingStorageData);
  }
}
