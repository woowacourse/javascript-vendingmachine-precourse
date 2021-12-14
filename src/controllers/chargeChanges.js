import { getLocalStorageItem, setLocalStorageItem } from "./localStorageController.js"
import { CHANGE_KEY } from "../constants/constants.js";
import { updateState } from "../models/state.js";

export function clickChargeButton(e) {
  e.preventDefault();
  let changes = getLocalStorageItem(CHANGE_KEY);
  const $vendingMachineChargeInput = document.getElementById("vending-machine-charge-input");

  const inputCoins = makeRandomCoins($vendingMachineChargeInput.value);

  if(changes === null) setLocalStorageItem(CHANGE_KEY,inputCoins);
  else {
    changes.ten += inputCoins.ten;
    changes.fifty += inputCoins.fifty;
    changes.hundred += inputCoins.hundred;
    changes.fiveHundred += inputCoins.fiveHundred;
    console.log(changes);
    setLocalStorageItem(CHANGE_KEY, changes);
  }  
  updateState();
}

export function makeRandomCoins(money) {
  let leftMoney = money;
  let randomCoins = {
    ten: 0,
    fifty: 0,
    hundred: 0,
    fiveHundred: 0,   
  }
  while(leftMoney > 0) {
    const randomCoin = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
    if(leftMoney >= randomCoin) {
      leftMoney -= randomCoin;
      countChange(randomCoin, randomCoins);
    } 
  }
  
  return randomCoins;
}

function countChange(randomCoin, object) {
  if(randomCoin === 10) 
    object.ten += 1;
  else if(randomCoin === 50)
    object.fifty += 1;
  else if(randomCoin === 100)
    object.hundred += 1;
  else object.fiveHundred += 1;
}