import {
  COIN_10,
  COIN_100,
  COIN_50,
  COIN_500,
  COIN_KEY_LIST,
} from '../constants/coinConstants.js';
import { VENDINGCOIN_STORGAE_NAME } from '../constants/constants.js';
import store from '../storage/store.js';

function computeCoinCount(vendingCoinStorage) {
  let sumCoin = 0;
  for (const key in vendingCoinStorage) {
    if (key === COIN_KEY_LIST[0]) {
      sumCoin = sumCoin + vendingCoinStorage[key] * Number(COIN_500);
    } else if (key === COIN_KEY_LIST[1]) {
      sumCoin = sumCoin + vendingCoinStorage[key] * Number(COIN_100);
    } else if (key === COIN_KEY_LIST[2]) {
      sumCoin = sumCoin + vendingCoinStorage[key] * Number(COIN_50);
    } else if (key === COIN_KEY_LIST[3]) {
      sumCoin = sumCoin + vendingCoinStorage[key] * Number(COIN_10);
    }
  }
  return sumCoin;
}

export default function getTotalVendingCoin() {
  const vendingCoinStorage = store.getLocalStorage(VENDINGCOIN_STORGAE_NAME);
  let totalVendingCoinCount = 0;
  if (vendingCoinStorage) {
    totalVendingCoinCount = computeCoinCount(vendingCoinStorage);
  }
  return totalVendingCoinCount;
}
