import { getLocalStorageItem } from "../controllers/localStorageController.js";
import { PRODUCT_KEY, CHANGE_KEY, INPUT_MONEY_KEY } from "../constants/constants.js"

export let state = {
    productList: [],
    changes: {
      ten: 0,
      fifty: 0,
      hundred: 0,
      fiveHundred: 0,
      total: 0,
    },
    inputMoney: 0,
};

export function updateState() {
  if(getLocalStorageItem(PRODUCT_KEY) !== null)
    state.productList = getLocalStorageItem(PRODUCT_KEY);
  if(getLocalStorageItem(CHANGE_KEY) !== null)
    state.changes = getLocalStorageItem(CHANGE_KEY);
  if(getLocalStorageItem(INPUT_MONEY_KEY) !== null)
    state.inputMoney = getLocalStorageItem(INPUT_MONEY_KEY);
}