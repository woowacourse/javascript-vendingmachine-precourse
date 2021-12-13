import { USERMONEY_STORAGE_NAME } from '../constants/constants.js';
import store from './store.js';

export default function updateUserMoneyStorage(productPrice) {
  let totalMoney =
    Number(store.getLocalStorage(USERMONEY_STORAGE_NAME)) -
    Number(productPrice);
  store.setLocalStoreage(USERMONEY_STORAGE_NAME, totalMoney);
}
