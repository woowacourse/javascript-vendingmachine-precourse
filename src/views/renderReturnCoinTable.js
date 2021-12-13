import { COIN_KEY_LIST } from '../constants/coinConstants.js';
import { $ } from '../dom/dom.js';

export default function renderReturnCoinTable(returnCoinObject) {
  const coinElementIdList = [
    '#coin-500-quantity',
    '#coin-100-quantity',
    '#coin-50-quantity',
    '#coin-10-quantity',
  ];
  coinElementIdList.forEach((item, index) => {
    $(item).innerText = `${returnCoinObject[COIN_KEY_LIST[index]]}개`;
  });
}
