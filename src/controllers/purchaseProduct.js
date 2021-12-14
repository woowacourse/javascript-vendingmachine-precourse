import { getLocalStorageItem, setLocalStorageItem } from "./localStorageController.js"
import { INPUT_MONEY_KEY } from "../constants/constants.js";
import { updateState } from "../models/state.js";
import { rendering } from "../views/render.js";

export function clickInputMoneyButton(e) {
  e.preventDefault();
  let inputMoney = getLocalStorageItem(INPUT_MONEY_KEY);
  const $chargeInput = document.getElementById("charge-input");

  if(inputMoney === null) setLocalStorageItem(INPUT_MONEY_KEY, parseInt($chargeInput.value));
  else {
    inputMoney += parseInt($chargeInput.value);
    setLocalStorageItem(INPUT_MONEY_KEY, inputMoney);
    console.log(inputMoney);
  }  
  updateState();
  rendering();
}