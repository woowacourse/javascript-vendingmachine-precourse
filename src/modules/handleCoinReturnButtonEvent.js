import { COIN_KEY_LIST, COIN_LIST } from '../constants/coinConstants.js';
import { USERMONEY_STORAGE_NAME } from '../constants/constants.js';
import store from '../storage/store.js';
import updateUserMoneyStorage from '../storage/updateUserMoneyStorage.js';
import updateVendingCoinStorage from '../storage/updateVendingCoinStorage.js';
import renderInsertCoinShowElement from '../views/renderInsertCoinShowElement.js';
import renderReturnCoinTable from '../views/renderReturnCoinTable.js';
import computeReturnCoinCount from './computeReturnCoinCount.js';
import getTotalVendingCoin from './getTotalVendingCoin.js';

function getTotalReturnMoney(returnCoinObject) {
  let totalMoney = 0;
  COIN_KEY_LIST.forEach((item, index) => {
    totalMoney += Number(returnCoinObject[item]) * COIN_LIST[index];
  });
  return totalMoney;
}

export default function handleCoinReturnButtonEvent() {
  const returnCoinObject = computeReturnCoinCount();
  updateUserMoneyStorage(getTotalReturnMoney(returnCoinObject));
  renderInsertCoinShowElement();
  renderReturnCoinTable(returnCoinObject);
  updateVendingCoinStorage(returnCoinObject);
}
