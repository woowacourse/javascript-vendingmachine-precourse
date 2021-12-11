import { COIN_KEY_LIST } from '../constants/coinConstants.js';
import { VENDINGCOIN_STORGAE_NAME } from '../constants/constants.js';
import store from '../storage/store.js';

function initTotalCoinList() {
  let totalCoinList = {};
  COIN_KEY_LIST.forEach((item) => {
    totalCoinList[item] = 0;
  });
  return totalCoinList;
}

export default function joinVendingCoinList(vendingCoin) {
  let totalCoinList = initTotalCoinList();
  for (const key in vendingCoin) {
    totalCoinList[key] = vendingCoin[key];
  }
  const storageCoinList = store.getLocalStorage(VENDINGCOIN_STORGAE_NAME);
  if (storageCoinList) {
    for (const key in storageCoinList) {
      totalCoinList[key] += storageCoinList[key];
    }
  }
  return totalCoinList;
}
