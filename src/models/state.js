import { getLocalStorageItem } from "../controllers/localStorageController.js";
import { PRODUCT_KEY, CHANGE_KEY, INPUT_MONEY_KEY } from "../constants/constants.js"


export let state = {
    productList: [],
    changes: {
      ten: 0,
      fifty: 0,
      hundred: 0,
      fiveHundred: 0,
    },
    inputMoney: 0,
};

export function updateState() {
  state.productList = getLocalStorageItem(PRODUCT_KEY);
  state.changes = getLocalStorageItem(CHANGE_KEY);
  state.inputMoney = getLocalStorageItem(INPUT_MONEY_KEY);
}