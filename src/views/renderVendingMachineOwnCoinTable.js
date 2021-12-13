import {
  COIN_EIEMENT_ID_LIST,
  COIN_KEY_LIST,
} from '../constants/coinConstants.js';
import { VENDINGCOIN_STORGAE_NAME } from '../constants/constants.js';
import { $ } from '../dom/dom.js';
import store from '../storage/store.js';

export default function renderVendingMachineOwnCoinTable() {
  const vendingCoinList = store.getLocalStorage(VENDINGCOIN_STORGAE_NAME);
  if (vendingCoinList) {
    COIN_KEY_LIST.forEach((item, index) => {
      $(COIN_EIEMENT_ID_LIST[index]).innerText = `${vendingCoinList[item]}개`;
    });
  } else {
    COIN_KEY_LIST.forEach((item, index) => {
      $(COIN_EIEMENT_ID_LIST[index]).innerText = `0개`;
    });
  }
}
