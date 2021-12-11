import { VENDINGCOIN_STORGAE_NAME } from '../constants/constants.js';
import store from '../storage/store.js';
export default function getTotalVendingCoin() {
  const vendingCoinStorage = store.getLocalStorage(VENDINGCOIN_STORGAE_NAME);
  let totalVendingCoinCount = 0;
  if (vendingCoinStorage) {
  } else {
    return totalVendingCoinCount;
  }
}
