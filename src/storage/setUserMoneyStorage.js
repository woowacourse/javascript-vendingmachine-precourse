import { USERMONEY_STORAGE_NAME } from '../constants/constants.js';
import store from './store.js';

export default function setUserMoneyStorage(userChargeInput) {
  let totalChargeMoney = Number(userChargeInput);
  const userMoneyStorage = store.getLocalStorage(USERMONEY_STORAGE_NAME);
  if (userMoneyStorage) {
    totalChargeMoney += Number(userMoneyStorage);
  }
  store.setLocalStoreage(USERMONEY_STORAGE_NAME, totalChargeMoney);
}
