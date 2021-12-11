import { VENDINGCOIN_STORGAE_NAME } from '../constants/constants.js';
import createRandomCoinCount from '../modules/createRandomCoinCount.js';
import store from './store.js';
import joinVendingCoinList from '../modules/joinVendingCoinList.js';

export default function setVendingCoinStorage(userChargeInput) {
  const totalVendingCoin = joinVendingCoinList(
    createRandomCoinCount(userChargeInput)
  );
  store.setLocalStoreage(VENDINGCOIN_STORGAE_NAME, totalVendingCoin);
}
