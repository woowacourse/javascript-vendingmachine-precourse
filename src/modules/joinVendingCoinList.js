import { COIN_KEY_LIST } from '../constants/coinConstants.js';
import { VENDINGCOIN_STORGAE_NAME } from '../constants/constants.js';
import store from '../storage/store.js';

export default function joinVendingCoinList(vendingCoin) {
  let totalCoinObject = vendingCoin;
  const stroageCoinObject = store.getLocalStorage(VENDINGCOIN_STORGAE_NAME);
  if (stroageCoinObject) {
    for (const key in stroageCoinObject) {
      totalCoinObject[key] += stroageCoinObject[key];
    }
  }
  return totalCoinObject;
}
