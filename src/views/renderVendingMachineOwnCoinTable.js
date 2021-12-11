import { COIN_KEY_LIST } from '../constants/coinConstants.js';
import { VENDINGCOIN_STORGAE_NAME } from '../constants/constants.js';
import { $ } from '../dom/dom.js';
import store from '../storage/store.js';

export default function renderVendingMachineOwnCoinTable() {
  const vendingCoinList = store.getLocalStorage(VENDINGCOIN_STORGAE_NAME);
  const coinElementIdList = [
    '#vending-machine-coin-500-quantity',
    '#vending-machine-coin-100-quantity',
    '#vending-machine-coin-50-quantity',
    '#vending-machine-coin-10-quantity',
  ];
  COIN_KEY_LIST.forEach((item, index) => {
    $(coinElementIdList[index]).innerText = `${vendingCoinList[item]}개`;
  });
}
