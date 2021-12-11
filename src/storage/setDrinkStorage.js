import { DRINK_STORAGE_NAME } from '../constants/constants.js';
import store from './store.js';

export default function setDrinkStorage(userProductInput) {
  let drinkStorage = store.getLocalStorage(DRINK_STORAGE_NAME);
  drinkStorage.push(userProductInput);
  store.setLocalStoreage(DRINK_STORAGE_NAME, drinkStorage);
}
