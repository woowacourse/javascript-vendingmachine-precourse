import { COIN_KEY_LIST } from '../constants/coinConstants.js';
import { VENDINGCOIN_STORGAE_NAME } from '../constants/constants.js';
import store from './store.js';

export default function updateVendingCoinStorage(returnCoinObject) {
  let vendingCoinStorageData = store.getLocalStorage(VENDINGCOIN_STORGAE_NAME);
  COIN_KEY_LIST.forEach((item) => {
    vendingCoinStorageData[item] =
      Number(vendingCoinStorageData[item]) - Number(returnCoinObject[item]);
  });
  store.setLocalStoreage(VENDINGCOIN_STORGAE_NAME, vendingCoinStorageData);
}
